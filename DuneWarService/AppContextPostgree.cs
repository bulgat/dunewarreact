using DuneWarLastFantasy.Models;
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
        /*
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=CSharpCornerDB;Username=postgres;Password=avaria");
        }*/
    }
}
