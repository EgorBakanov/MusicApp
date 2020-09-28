using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Musician> Musicians { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Track> Tracks { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            ConfigureModel(modelBuilder);

            SeedDb(modelBuilder);
        }

        private void ConfigureModel(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>()
                .HasOne(a => a.Musician)
                .WithMany(m => m.Albums)
                .HasForeignKey(a => a.MusicianId)
                .IsRequired();

            modelBuilder.Entity<Track>()
                .HasOne(t => t.Album)
                .WithMany(a => a.Tracks)
                .HasForeignKey(t => t.AlbumId)
                .IsRequired();
        }

        private void SeedDb(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Musician>().HasData(
                new Musician() { Id = 1, Name = "Edward Sheeran", Age = 27, Genre = "pop", CareerStartYear = 2006 });

            modelBuilder.Entity<Album>().HasData(
                new Album() { Id = 1, MusicianId = 1, Name = "Plus", ReleaseYear = 2011 },
                new Album() { Id = 2, MusicianId = 1, Name = "Multiply", ReleaseYear = 2014 },
                new Album() { Id = 3, MusicianId = 1, Name = "Divide", ReleaseYear = 2017 });

            modelBuilder.Entity<Track>().HasData(
                new Track() { Id = 1, AlbumId = 1, Name = "The A Team", Duration = "04:18", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 2, AlbumId = 1, Name = "Drunk", Duration = "03:20", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 3, AlbumId = 1, Name = "U.N.I.", Duration = "03:48", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 4, AlbumId = 1, Name = "Grade 8", Duration = "02:59", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 5, AlbumId = 2, Name = "One", Duration = "04:13", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 6, AlbumId = 2, Name = "I'm a Mess", Duration = "04:06", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 7, AlbumId = 2, Name = "Nina", Duration = "03:43", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 8, AlbumId = 2, Name = "Photograph", Duration = "04:17", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 9, AlbumId = 3, Name = "Erazer", Duration = "03:47", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 10, AlbumId = 3, Name = "Castle on the Hill", Duration = "04:21", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 11, AlbumId = 3, Name = "Dive", Duration = "03:58", IsFavorite = false, IsListened = false, Rating = 0 },
                new Track() { Id = 12, AlbumId = 3, Name = "Shape of You", Duration = "03:53", IsFavorite = false, IsListened = false, Rating = 0 });
        }
    }
}
