using MusicApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.ViewModels
{
    public class MusicianFormViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Genre { get; set; }
        public int CareerStartYear { get; set; }

        public MusicianFormViewModel(Musician musician)
        {
            this.Id = musician.Id;
            this.Name = musician.Name;
            this.Age = musician.Age;
            this.Genre = musician.Genre;
            this.CareerStartYear = musician.CareerStartYear;
        }
    }
}
