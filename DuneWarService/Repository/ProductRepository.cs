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
        public List<Product> GetProductClassic(bool? isArsenal)
        {
            List<Arsenal> arsenalList = _context.Arsenal.ToList();
            List<Factory> factoryList = _context.Factory.ToList();
            List<Product> productList = _context.Product
                .Where(a=> isArsenal==null || isArsenal==true? a.Arsenal!=null : a.Arsenal == null).ToList();
            return productList;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            var kol = await _context.Product.Where(a => a.ID == id).ExecuteDeleteAsync();
            return true;
        }
    }
}
