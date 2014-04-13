using System.Web.Http;
using AtTheMovies.DataStore;
using AtTheMovies.Models;

namespace AtTheMovies.Controllers
{
    [RoutePrefix("api/movies")]
    public class MovieController : ApiController
    {
        private IMovieStore _movieStore;

        public MovieController()
        {
            _movieStore = new InMemoryMovieStore();
        }

        [Route("")]
        public IHttpActionResult Get()
        {
            var movies = _movieStore.FindAll();
            return Ok(movies);
        }

        [Route("{id:int}", Name="GetMovieById")]
        public IHttpActionResult Get(int id)
        {
            var movie = _movieStore.FindById(id);
            if (movie != null)
            {
                return Ok(movie);
            }
            return NotFound();
        }
        
        [Route("")]
        public IHttpActionResult Post(Movie movie)
        {
            if (ModelState.IsValid)
            {
                _movieStore.Add(movie);
                return Created(Url.Link("GetMovieById", new { id = movie.Id}), movie);
            }
            return BadRequest(ModelState);
        }

        [Route("")]
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

        [Route("{id:int}")]
        public IHttpActionResult Delete(int id)
        {
            var result = _movieStore.Delete(id);
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound();
        }
    }
}