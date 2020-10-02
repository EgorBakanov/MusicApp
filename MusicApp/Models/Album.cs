using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MusicApp.Models
{
    public class Album
    {
        public int Id { get; set; }
        [Required, MaxLength(50)]
        public string Name { get; set; }
        [Range(1900, 2100)]
        public int ReleaseYear { get; set; }

        public int MusicianId { get; set; }
        public Musician Musician { get; set; }

        public List<Track> Tracks { get; set; }
    }
}
