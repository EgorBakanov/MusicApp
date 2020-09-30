using MusicApp.Models;

namespace MusicApp.ViewModels
{
    public class TrackViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Duration { get; set; }
        
        public TrackViewModel(Track track)
        {
            this.Id = track.Id;
            this.Name = track.Name;
            this.Duration = track.Duration;
        }
    }
}
