namespace DuneWarLastFantasy.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        void Begin();
        void Save();
        void Commit();
        void Rollback();
    }
}
