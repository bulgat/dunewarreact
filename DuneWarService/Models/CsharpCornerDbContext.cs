using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DuneWarLastFantasy.Models;

public partial class CsharpCornerDbContext : DbContext
{
    public CsharpCornerDbContext()
    {
    }

    public CsharpCornerDbContext(DbContextOptions<CsharpCornerDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Achievement> Achievements { get; set; }

    public virtual DbSet<Algorithm> Algorithms { get; set; }

    public virtual DbSet<Arsenal> Arsenals { get; set; }

    public virtual DbSet<Article> Articles { get; set; }

    public virtual DbSet<Author> Authors { get; set; }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<DataFile> DataFiles { get; set; }

    public virtual DbSet<DepoAssetRest> DepoAssetRests { get; set; }

    public virtual DbSet<Factory> Factories { get; set; }

    public virtual DbSet<History> Historys { get; set; }

    public virtual DbSet<Method> Methods { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<SalaryDepartament> SalaryDepartaments { get; set; }

    public virtual DbSet<Score> Scores { get; set; }

    public virtual DbSet<Standard> Standards { get; set; }

    public virtual DbSet<StoreHistory> StoreHistorys { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=CSharpCornerDB;Username=postgres;Password=avaria");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Achievement>(entity =>
        {
            entity.HasIndex(e => e.AchievementId, "IX_Achievements_AchievementId");

            entity.HasOne(d => d.AchievementNavigation).WithMany(p => p.Achievements).HasForeignKey(d => d.AchievementId);
        });

        modelBuilder.Entity<Algorithm>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<Arsenal>(entity =>
        {
            entity.ToTable("Arsenal", "DuneWar");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.NumCannon).HasDefaultValue(0);
        });

        modelBuilder.Entity<Article>(entity =>
        {
            entity.Property(e => e.Content).HasDefaultValueSql("''::text");
            entity.Property(e => e.Title).HasDefaultValueSql("''::text");
        });

        modelBuilder.Entity<Author>(entity =>
        {
            entity.ToTable("Author");

            entity.HasIndex(e => e.ArticlesId, "IX_Author_ArticlesId");

            entity.HasOne(d => d.Articles).WithMany(p => p.Authors).HasForeignKey(d => d.ArticlesId);
        });

        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasIndex(e => e.AlgorithmId, "IX_Clients_Algorithm_ID");

            entity.HasIndex(e => e.MethodId, "IX_Clients_Method_ID");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AlgorithmId).HasColumnName("Algorithm_ID");
            entity.Property(e => e.MethodId).HasColumnName("Method_ID");

            entity.HasOne(d => d.Algorithm).WithMany(p => p.Clients).HasForeignKey(d => d.AlgorithmId);

            entity.HasOne(d => d.Method).WithMany(p => p.Clients).HasForeignKey(d => d.MethodId);
        });

        modelBuilder.Entity<DepoAssetRest>(entity =>
        {
            entity.HasIndex(e => e.DataFileId, "IX_DepoAssetRests_DataFileID");

            entity.Property(e => e.DataFileId).HasColumnName("DataFileID");

            entity.HasOne(d => d.DataFile).WithMany(p => p.DepoAssetRests).HasForeignKey(d => d.DataFileId);
        });

        modelBuilder.Entity<Factory>(entity =>
        {
            entity.ToTable("Factory", "DuneWar");

            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<History>(entity =>
        {
            entity.HasIndex(e => e.StoryId, "IX_Historys_Story_ID");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Description).HasDefaultValueSql("''::text");
            entity.Property(e => e.StoryId).HasColumnName("Story_ID");

            entity.HasOne(d => d.Story).WithMany(p => p.Histories).HasForeignKey(d => d.StoryId);
        });

        modelBuilder.Entity<Method>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("Product", "DuneWar");

            entity.HasIndex(e => e.ArsenalId, "IX_Product_Arsenal_ID");

            entity.HasIndex(e => e.FactorioId, "IX_Product_Factorio_ID");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ArsenalId).HasColumnName("Arsenal_ID");
            entity.Property(e => e.FactorioId).HasColumnName("Factorio_ID");

            entity.HasOne(d => d.Arsenal).WithMany(p => p.Products).HasForeignKey(d => d.ArsenalId);

            entity.HasOne(d => d.Factorio).WithMany(p => p.Products).HasForeignKey(d => d.FactorioId);
        });

        modelBuilder.Entity<SalaryDepartament>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("SalaryDepartament", "DuneWar");

            entity.Property(e => e.DepartamentId).HasColumnName("departamentId");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.Salary).HasColumnName("salary");
        });

        modelBuilder.Entity<Score>(entity =>
        {
            entity.ToTable("Score");

            entity.Property(e => e.Name).HasMaxLength(5);
        });

        modelBuilder.Entity<Standard>(entity =>
        {
            entity.ToTable("Standard");
        });

        modelBuilder.Entity<StoreHistory>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AddressId)
                .HasDefaultValue(0)
                .HasColumnName("Address_ID");
            entity.Property(e => e.AddressName)
                .HasDefaultValueSql("''::text")
                .HasColumnName("Address_Name");
            entity.Property(e => e.Description).HasDefaultValueSql("''::text");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.ToTable("Student");

            entity.HasIndex(e => e.CurrentStandardId, "IX_Student_CurrentStandardId");

            entity.HasIndex(e => e.PreviousStandardId, "IX_Student_PreviousStandardId");

            entity.Property(e => e.StudentId).HasColumnName("StudentID");

            entity.HasOne(d => d.CurrentStandard).WithMany(p => p.StudentCurrentStandards).HasForeignKey(d => d.CurrentStandardId);

            entity.HasOne(d => d.PreviousStandard).WithMany(p => p.StudentPreviousStandards).HasForeignKey(d => d.PreviousStandardId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
