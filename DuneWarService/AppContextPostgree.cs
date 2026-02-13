using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.duneWar;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.Metrics;
using System.Numerics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace DuneWarLastFantasy
{
    public class AppContextPostgree : DbContext
    {
        public AppContextPostgree(DbContextOptions<AppContextPostgree> options) : base(options)
        {

        }
        public DbSet<Score> Score { get; set; }
        public DbSet<Author> Author { get; set; }
        public DbSet<Article> Article { get; set; }

        public DbSet<Product> Product { get; set; }
        public DbSet<Arsenal> Arsenal {  get; set; }
        public DbSet<Factory> Factory { get; set; }

        public DbSet<TypeProduct> TypeProduct { get; set; }
        public DbSet<Student> Student { get; set; }

        public DbSet<Standard> Standard { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Arsenal>().Property(c => c.ID).HasColumnName("ID").ValueGeneratedOnAdd();
            /*
            modelBuilder.Entity<TypeProduct>()
            .HasOne(a => a.Product) // Author has one AuthorBiography
            .WithOne(b=>b.TypeProduct)   // AuthorBiography has one Author
            .HasForeignKey<Product>(b => b.TypeProductId);
            //.HasForeignKey<Product>(a=>a.TypeProductId); 
*/
            modelBuilder.Entity<Student>().Property(c=>c.StudentId).HasColumnName("StudentID").ValueGeneratedOnAdd();
        }

        public void BeginTransaction()
        {
            Database.BeginTransaction();
        }

        public void CommitTransaction()
        {
            Database.CommitTransaction();
        }

        public void RollbackTransaction()
        {
            Database.RollbackTransaction();
        }
        //dotnet ef migrations add kol
        //dotnet ef update-datasbase
    }
}
