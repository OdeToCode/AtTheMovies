using System;
using System.Linq;
using System.Collections.Generic;
using AtTheMovies.Server.Models;

namespace AtTheMovies.Server.Data 
{
    public class InMemoryMovieStore : IMovieStore
    {
		static InMemoryMovieStore() 
		{
			_movieInstanceCount = 0;
			_movies = new List<Movie>();
			_movies.Add(new Movie { Id = GenerateId(), Title = "Star Wars", Rating=5, Length=120  });
            _movies.Add(new Movie { Id = GenerateId(), Title = "Star Trek", Rating=4, Length=90  });
            _movies.Add(new Movie { Id = GenerateId(), Title = "Terminator", Rating=4, Length=125  });
            _movies.Add(new Movie { Id = GenerateId(), Title = "The Hobbit", Rating=5, Length=480  });            	
		}
		
        public Movie Add(Movie newMovie)
        {
            newMovie.Id = GenerateId();
            _movies.Add(newMovie);
            return newMovie;
        }

        public void Delete(int id)
        {
            var movie = GetById(id);
            if(movie != null)
            {
                _movies.Remove(movie);
            }
        }

        public IEnumerable<Movie> GetAll()
        {
            return _movies;
        }

        public Movie GetById(int id)
        {
            return _movies.FirstOrDefault(m => m.Id == id);
        }

        public Movie Update(Movie updatedMovie)
        {
            var movie = GetById(updatedMovie.Id);
            _movies.Remove(movie);
            _movies.Add(updatedMovie);
            return updatedMovie;
        }

		private static int GenerateId() 
		{
			return _movieInstanceCount += 1;
		}
		
		static int _movieInstanceCount;		
		static List<Movie> _movies;
    }
}