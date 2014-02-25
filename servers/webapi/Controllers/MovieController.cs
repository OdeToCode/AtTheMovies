using System.Web.Http;
using AtTheMovies.DataStore;
using AtTheMovies.Models;

namespace AtTheMovies.Controllers
{
    [Route("api/movies")]
    public class MovieController : ApiController
    {
        private IMovieStore _movieStore;

        public MovieController()
        {
            _movieStore = new InMemoryMovieStore();
        }

        public IHttpActionResult Get()
        {
            var movies = _movieStore.FindAll();
            return Ok(movies);
        }

        public IHttpActionResult Get(int id)
        {
            var movie = _movieStore.FindById(id);
            if (movie != null)
            {
                return Ok(movie);
            }
            return NotFound();
        }

        public IHttpActionResult Post(Movie movie)
        {
            if (ModelState.IsValid)
            {
                _movieStore.Add(movie);
                return Created(Url.Link("Get", new { id = movie.Id}), movie);
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult Put(Movie movie)
        {
            if (ModelState.IsValid)
            {
                var result = _movieStore.Update(movie);
                if (result != null)
                {
                    return Ok(result);
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult Delete(Movie movie)
        {
            var result = _movieStore.Delete(movie);
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound();
        }
    }
}