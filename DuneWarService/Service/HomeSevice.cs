using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;

namespace DuneWarLastFantasy.Service
{
    public class HomeSevice
    {
        AppContextPostgree _context;
        public HomeSevice(AppContextPostgree context)
        {
            _context = context;
        }
        public List<Arsenal> GetArsenal()
        {
            List<Arsenal> arsenalList = _context.Arsenal.Include(a => a.Products).OrderByDescending(a => a.NumCannon).ToList();
            return arsenalList;
        }

        
    }
}
