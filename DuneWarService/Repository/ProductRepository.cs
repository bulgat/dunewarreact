using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;

namespace DuneWarLastFantasy.Repositories
{
    public class ProductRepository
    {
        AppContextPostgree _context;
        public ProductRepository(AppContextPostgree context) { 
            _context = context;
        }
        public async Task<IEnumerable<Product>> GetProductClassic(bool? isArsenal)
        {
            IEnumerable<Arsenal> arsenalList = await _context.Arsenal.ToListAsync();
            IEnumerable<Factory> factoryList = await _context.Factory.ToListAsync();
            IEnumerable<Product> productList = await _context.Product
                .Where(a=> isArsenal==null || isArsenal==true? a.Arsenal!=null : a.Arsenal == null).ToListAsync();
            return productList;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            var kol = await _context.Product.Where(a => a.ID == id).ExecuteDeleteAsync();
            return true;
        }
        public List<Product> GetProductInclude()
        {
            List<Product> productList = _context.Product.Include(a => a.Arsenal).Include(b => b.Factorio).ToList();
            return productList;
        }
        public async Task<Product> GetProduct(int id)
        {
            return _context.Product.FirstOrDefault(a=>a.ID==id);
        }
        public async Task<bool> AddProduct(Product product)
        {
            await _context.Product.AddAsync(product);
            _context.SaveChanges();
            return true;
        }
        public IEnumerable<Product> ProductAllStore()
        {
            //Создает анонимные функции, объединяя их по Ид
            /*
            SELECT a."Name" AS "FirstName", f."Name" AS "SecondName"
            FROM "DuneWar"."Arsenal" AS a
            INNER JOIN "DuneWar"."Factory" AS f ON a."ID" = f."ID"
            */
            var innerJoinQuery = from e in _context.Arsenal
                                 join d in _context.Factory on e.ID equals d.ID
                                 select new
                                 {
                                     FirstName = e.Name,
                                     SecondName = d.Name
                                 };
            var kol = innerJoinQuery.ToList();

            return null;
        }
    }
}
