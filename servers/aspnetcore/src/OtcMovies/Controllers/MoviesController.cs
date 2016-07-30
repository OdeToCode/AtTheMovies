using Microsoft.AspNetCore.Mvc;
using OtcMovies.Data;
using OtcMovies.Models;

namespace OtcMovies.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        public MoviesController(IMovieStore store)
        {
            _store = store;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_store.GetAll());
        }

        [HttpGet, Route("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _store.Get(id);
            if(movie != null)
            {
                return Ok(movie);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Movie newMovie)
        {
            if (ModelState.IsValid)
            {
                newMovie = _store.Create(newMovie);
                return Created("", newMovie);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            if (ModelState.IsValid)
            {
                movie = _store.Update(movie);
                if(movie == null)
                {
                    return NotFound();
                }
                return Ok(movie);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Movie movie)
        {
            movie = _store.Delete(movie);
            if(movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        IMovieStore _store;
    }
}
