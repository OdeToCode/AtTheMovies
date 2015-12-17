using System.Collections.Generic;
using AtTheMovies.Server.Models;

namespace AtTheMovies.Server.Data 
{
	public interface IMovieStore
	{
		IEnumerable<Movie> GetAll();
		Movie GetById(int id);
		Movie Update(Movie updatedMovie);
		Movie Add(Movie newMovie);
		void Delete(int id);			
	}	
}