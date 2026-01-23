using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;

namespace DuneWarLastFantasy.Repositories
{
    public class ArsenalRepository
    {
        AppContextPostgree _context;
        public ArsenalRepository(AppContextPostgree context) { 
            _context = context;
        }
        private IOrderedEnumerable<Arsenal> GetQuery(bool sort)
        {
            return _context.Arsenal.AsEnumerable().OrderBy(x => x, new ComparerLinqSort(sort));
        }

        public async Task<IEnumerable<Arsenal>> GetArsenal(bool sort)
        {

            return  _context.Arsenal.Include(a=>a.Products).AsEnumerable().OrderBy(x => x, new ComparerLinqSort(sort)).ToList();
        }
        public async Task<Arsenal> GetArsenalWithId(int id)
        {
            return _context.Arsenal.Include(a => a.Products).FirstOrDefault(a=>a.ID==id);
            //return _context.Arsenal.Include(a => a.Products).Where(a => a.Products.Select(b => b.ID).Contains(id));
        }
        public int ArsenalCount(bool sort) {
            return GetQuery(sort).Count();
        }
        public async Task<bool> AddArsenal(Arsenal arsenal)
        {
            _context.Arsenal.Add(arsenal);
            _context.SaveChangesAsync();
            return true;
        }
    }
}
