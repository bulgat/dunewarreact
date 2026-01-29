using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DuneWarLastFantasy.Service
{
    public class HomeSevice
    {
        AppContextPostgree _context;
        ArsenalRepository _arsenalRepository;

        public HomeSevice(AppContextPostgree context, ArsenalRepository arsenalRepository)
        {
            _context = context;
            _arsenalRepository = arsenalRepository;
        }
        public async Task<IEnumerable<Arsenal>> GetArsenal(bool sort)
        {
            return await _arsenalRepository.GetArsenal(sort);

        }
        public int ArsenalCount(bool sort)
        {
            return _arsenalRepository.ArsenalCount(sort);
        }
        public async Task<Arsenal> GetArsenalWithId(int id)
        {
            return await _arsenalRepository.GetArsenalWithId(id);
        }
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapList()
        {
            return await _arsenalRepository.ArsenalMapList();
        }
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapProjectToList()
        {
            return await _arsenalRepository.ArsenalMapProjectToList();
        }
  
        public async Task<bool> AddArsenal(Arsenal arsenal)
        {
            return await _arsenalRepository.AddArsenal(arsenal);
        }
    }
 
    
}
