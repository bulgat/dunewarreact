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
        public async Task<IEnumerable<Arsenal>> GetArsenal(int page, int size, bool sort)
        {
            return await _arsenalRepository.GetArsenal(page, size, sort);

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
