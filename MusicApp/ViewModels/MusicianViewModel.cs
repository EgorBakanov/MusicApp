using MusicApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace MusicApp.ViewModels
{
    public class MusicianViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public List<AlbumViewModel> Albums { get; set; }

        public MusicianViewModel(Musician musician)
        {
            this.Id = musician.Id;
            this.Name = musician.Name;
            this.Genre = musician.Genre;

            this.Albums = musician.Albums.Select(a => new AlbumViewModel(a)).ToList();
        }
    }
}
