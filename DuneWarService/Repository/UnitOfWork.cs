using System;

namespace DuneWarLastFantasy.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppContextPostgree _context;
        private IRepository _userRepository;
        private IRepository _orderRepository;

        public UnitOfWork(AppContextPostgree context)
        {
            _context = context;
        }
        public void Begin()
        {
            _context.BeginTransaction();
        }
        
        public void Save()
        {
            _context.SaveChanges();
        }

        public void Commit()
        {
            
            _context.CommitTransaction();
        }

        public void Rollback()
        {
            _context.RollbackTransaction();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
