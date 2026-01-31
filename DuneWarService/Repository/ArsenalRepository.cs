using AutoMapper;
using AutoMapper.QueryableExtensions;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;

namespace DuneWarLastFantasy.Repositories
{
    public class ArsenalRepository
    {
        AppContextPostgree _context;
        IMapper _mapper;
        public ArsenalRepository(AppContextPostgree context, IMapper mapper) { 
            _context = context;
            _mapper = mapper;
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
            return _context.Arsenal.Include(a => a.Products).ThenInclude(b=>b.TypeProduct).FirstOrDefault(a=>a.ID==id);

        }

        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapList() {
            return await _context.Arsenal.Include(a => a.Products).Select(a => _mapper.Map<ArsenalSlashResponse>(a)).ToListAsync();
        }

        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapProjectToList()
        {
            return await _context.Arsenal.Include(a => a.Products).ProjectTo<ArsenalSlashResponse>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public int ArsenalCount(bool sort) {
            return GetQuery(sort).Count();
        }
        public async Task<bool> AddArsenal(Arsenal arsenal)
        {
            try
            {

                _context.Arsenal.Add(arsenal);
                
                return true;
            } catch(Exception err)
            {

            }
            return false;
        }
    }
}
