using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using AtTheMovies.Models;

namespace AtTheMovies.DataStore
{
    public class InMemoryMovieStore : IMovieStore
    {
        static InMemoryMovieStore()
        {
            var seedData = new []
            {
                new Movie {Id = 1, Title = "Star Wars", Rating = 5, Year = 1979},
                new Movie {Id = 2, Title = "The Amazing Spiderman 2", Rating = 3, Year = 2014},
                new Movie {Id = 3, Title = "Star Trek", Rating = 4, Year = 2009}
            };
            
            _movies = new ConcurrentDictionary<int, Movie>();                       
            Array.ForEach(seedData, movie => _movies.AddOrUpdate(movie.Id, movie, (i, m) => movie));                       
        }

        public IEnumerable<Movie> FindAll()
        {
            return _movies.Values;
        }

        public Movie FindById(int id)
        {
            Movie result;
            if (_movies.TryGetValue(id, out result))
            {
                return result;
            }
            return null;
        }

        public Movie Update(Movie updatedMovie)
        {
            Movie result;
            if (_movies.TryGetValue(updatedMovie.Id, out result))
            {
                result.Rating = updatedMovie.Rating;
                result.Title = updatedMovie.Title;
                result.Year = updatedMovie.Year;
                return result;
            }
            return null;
        }

        public Movie Add(Movie newMovie)
        {
            newMovie.Id = _movies.Count + 1;
            _movies.AddOrUpdate(newMovie.Id, newMovie, (i, movie) => newMovie);
            return newMovie;
        }

        public Movie Delete(int id)
        {
            Movie movie;
            _movies.TryRemove(id, out movie);
            return movie;
        }

        private static ConcurrentDictionary<int, Movie> _movies;
    }
}