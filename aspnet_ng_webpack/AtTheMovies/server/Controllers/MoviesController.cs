using AtTheMovies.Server.Data;
using AtTheMovies.Server.Models;
using Microsoft.AspNet.Mvc;

namespace AtTheMovies.Server.Controllers 
{
	[Route("[controller]")]
	public class MoviesController : Controller
	{
		public MoviesController(IMovieStore store)
		{
			_store = store;
		}
		
		[HttpGet]
		public IActionResult Get() 
		{
			var movies = _store.GetAll();
			return Ok(movies);
		}	
		
		[HttpGet("{id:int}")]
		public IActionResult Get(int id)
		{
			var movie = _store.GetById(id);
			return Ok(movie);
		}
		

        [HttpPost]
        public IActionResult Post([FromBody] Movie newMovie)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            newMovie = _store.Add(newMovie);
            return Ok(newMovie);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Movie updatedMovie)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }
            
			updatedMovie = _store.Update(updatedMovie);
            return Ok(updatedMovie);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _store.Delete(id);            
            return Ok();
        }
		
		IMovieStore _store;
	}
}