using System.ComponentModel.DataAnnotations;

namespace MusicApp.Models
{
    public class Track
    {
        public int Id { get; set; }
        [Required, MaxLength(50)]
        public string Name { get; set; }
        [Required, MaxLength(5), MinLength(3), RegularExpression(@"^\d{1,2}\:\d{1,2}$")]
        public string Duration { get; set; }
        public bool IsFavorite { get; set; }
        public bool IsListened { get; set; }
        [Range(-1, 1)]
        public int Rating { get; set; }

        public int AlbumId { get; set; }
        public Album Album { get; set; }
    }
}
