using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using DuneWarLastFantasy.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DuneWarLastFantasy.Service
{
    public class ArsenalSevice
    {
        ArsenalRepository _arsenalRepository;
        UnitOfWork _unitOfWork;
        public ArsenalSevice(ArsenalRepository arsenalRepository, UnitOfWork unitOfWork)
        {
            _arsenalRepository = arsenalRepository;
            _unitOfWork = unitOfWork;
        }
        public async Task<bool> UpdateArsenal(Arsenal arsenal)
        {   await _arsenalRepository.UpdateArsenal(arsenal);
            _unitOfWork.Save();
            return true;
        }
        public async Task<IEnumerable<Arsenal>> GetArsenal(int page, int size, bool sort)
        {
            return await _arsenalRepository.GetArsenal(page, size, sort);

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
    }
 
    
}
