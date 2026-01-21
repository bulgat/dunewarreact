using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using System;

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

    }
}
