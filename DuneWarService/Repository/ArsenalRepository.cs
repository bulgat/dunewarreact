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

        public List<Arsenal> GetArsenal(bool sort)
        {

            var arsenalList = _context.Arsenal.AsEnumerable().OrderBy(x => x, new ComparerLinqSort(sort)).ToList();


            return arsenalList;
        }
        public int ArsenalCount(bool sort) {
            return GetQuery(sort).Count();
        }
    }
}
