using MusicApp.Models;

namespace MusicApp.ViewModels
{
    public class AlbumFormViewModel
    {
        public int Id { get; set; }
        public int MusicianId { get; set; }
        public string Name { get; set; }
        public int ReleaseYear { get; set; }
        
        public AlbumFormViewModel(Album album)
        {
            this.Id = album.Id;
            this.Name = album.Name;
            this.ReleaseYear = album.ReleaseYear;
            this.MusicianId = album.MusicianId;
        }
    }
}
