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
    }
 
    
}
