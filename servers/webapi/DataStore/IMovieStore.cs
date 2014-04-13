using System.Collections.Generic;
using AtTheMovies.Models;

namespace AtTheMovies.DataStore
{
    public interface IMovieStore
    {
        IEnumerable<Movie> FindAll();
        Movie FindById(int id);
        Movie Update(Movie updatedMovie);
        Movie Add(Movie newMovie);
        Movie Delete(int id);
    }
}