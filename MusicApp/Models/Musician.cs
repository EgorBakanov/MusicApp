using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MusicApp.Models
{
    public class Musician
    {
        public int Id { get; set; }
        [Required, MaxLength(30)]
        public string Name { get; set; }
        [Range(0, 120)]
        public int Age { get; set; }
        [MaxLength(15)]
        public string Genre { get; set; }
        [Range(1900,2100)]
        public int CareerStartYear { get; set; }

        public List<Album> Albums { get; set; }
    }
}
