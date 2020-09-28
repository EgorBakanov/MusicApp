using MusicApp.Models;

namespace MusicApp.ViewModels
{
    public class TrackViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Duration { get; set; }
        public bool IsFavorite { get; set; }
        public bool IsListened { get; set; }
        public int Rating { get; set; }
        
        public TrackViewModel(Track track)
        {
            this.Id = track.Id;
            this.Name = track.Name;
            this.Duration = track.Duration;
            this.IsFavorite = track.IsFavorite;
            this.IsListened = track.IsListened;
            this.Rating = track.Rating;
        }
    }
}
