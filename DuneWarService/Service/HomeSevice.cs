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
        public List<Arsenal> GetArsenal(bool sort)
        {
            var arsenalList = _arsenalRepository.GetArsenal(sort);

            return arsenalList;
        }
        public int ArsenalCount(bool sort)
        {
            return _arsenalRepository.ArsenalCount(sort);
        }

        }
 
    
}
