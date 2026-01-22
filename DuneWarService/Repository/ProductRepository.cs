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
        public async Task<List<Product>> GetProductClassic(bool? isArsenal)
        {
            List<Arsenal> arsenalList = await _context.Arsenal.ToListAsync();
            List<Factory> factoryList = await _context.Factory.ToListAsync();
            List<Product> productList = await _context.Product
                .Where(a=> isArsenal==null || isArsenal==true? a.Arsenal!=null : a.Arsenal == null).ToListAsync();
            return productList;
        }
        public async Task<bool> DeleteProduct(int id)
        {
            var kol = await _context.Product.Where(a => a.ID == id).ExecuteDeleteAsync();
            return true;
        }
    }
}
