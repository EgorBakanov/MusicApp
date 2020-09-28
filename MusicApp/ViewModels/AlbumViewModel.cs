using MusicApp.Models;

namespace MusicApp.ViewModels
{
    public class AlbumViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public AlbumViewModel(Album album)
        {
            this.Id = album.Id;
            this.Name = album.Name;
        }
    }
}
