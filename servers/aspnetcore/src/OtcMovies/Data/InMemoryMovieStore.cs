using OtcMovies.Models;
using System.Collections.Generic;
using System.Linq;

namespace OtcMovies.Data
{
    public interface IMovieStore
    {
        IEnumerable<Movie> GetAll();
        Movie Get(int id);
        Movie Update(Movie movie);
        Movie Create(Movie movie);
        Movie Delete(Movie movie);
    }

    public class InMemoryMovieStore : IMovieStore
    {
        static InMemoryMovieStore()
        {
            _movies = new List<Movie>();
            _movies.Add(new Movie { Id = 1, Title = "Star Wars", Length = 120, Rating = 4 });
            _movies.Add(new Movie { Id = 2, Title = "Terminator", Length = 90, Rating = 5});
            _movies.Add(new Movie { Id = 3, Title = "Star Trek", Length = 112, Rating = 5 });
            _movies.Add(new Movie { Id = 4, Title = "The Hobbit", Length = 480, Rating = 4 });
            _nextId = 5;
        }

        public Movie Create(Movie movie)
        {
            lock(_movies)
            {
                movie.Id = _nextId;
                _nextId += 1;
                _movies.Add(movie);                
            }
            return movie;
        }

        public Movie Delete(Movie movie)
        {
            lock(_movies)
            {
                var found = _movies.FirstOrDefault(m => m.Id == movie.Id);
                if(found != null)
                {
                    _movies.Remove(found);
                }
                return found;
            }
            return null;
        }

        public Movie Get(int id)
        {
            return _movies.FirstOrDefault(m => m.Id == id);
        }

        public IEnumerable<Movie> GetAll()
        {
            return _movies;
        }

        public Movie Update(Movie movie)
        {
            lock(_movies)
            {
                var found = _movies.FirstOrDefault(m => m.Id == movie.Id);
                if(found != null)
                {
                    found.Title = movie.Title;
                    found.Length = movie.Length;
                    found.Rating = movie.Rating;
                }
            }
            return movie;
        }

        static int _nextId;
        static List<Movie> _movies;
    }
}
