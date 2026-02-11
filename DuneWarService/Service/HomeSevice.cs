using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using DuneWarLastFantasy.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DuneWarLastFantasy.Service
{
    public class HomeSevice
    {
        AppContextPostgree _context;
        ArsenalRepository _arsenalRepository;
        UnitOfWork _unitOfWork;
        public HomeSevice(AppContextPostgree context, ArsenalRepository arsenalRepository, UnitOfWork unitOfWork)
        {
            _context = context;
            _arsenalRepository = arsenalRepository;
            _unitOfWork = unitOfWork;
        }

        public int ArsenalCount(bool sort)
        {
            return _arsenalRepository.ArsenalCount(sort);
        }
       
  
        public async Task<string> AddArsenal(Arsenal arsenal)
        {
            try
            {
                _unitOfWork.Begin();
                await _arsenalRepository.AddArsenal(arsenal);
                _unitOfWork.Save();
                _unitOfWork.Commit();
                return "Сохранен";
            }
            catch (Exception ex) {
                _unitOfWork.Rollback();
                return "Ошибка "+ex.Message;
            }
        }
    }
 
    
}
