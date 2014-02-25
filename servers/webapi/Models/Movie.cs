using System;

namespace AtTheMovies.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public string Title { get; set; }
        public int Rating { get; set; }        
    }
}