using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.duneWar;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.Metrics;

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
            modelBuilder.Entity<Product>()
                .HasOne(a => a.TypeProduct)
                .WithOne(a => a.Product)
                .HasForeignKey<Product>(c => c.TypeProductId);
            
            modelBuilder.Entity<TypeProduct>()
            .HasOne(a => a.Product) // Author has one AuthorBiography
            .WithOne(b=>b.TypeProduct)   // AuthorBiography has one Author
            .HasForeignKey<Product>(b => b.TypeProductId);
            //.HasForeignKey<Product>(a=>a.TypeProductId); 
*/
 
        }

            //dotnet ef migrations add kol
            //dotnet ef update-datasbase
     }
}
