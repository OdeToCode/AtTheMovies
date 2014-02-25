using System.Web.Http;

namespace AtTheMovies
{
    [Route("api/movies")]
    public class MovieController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok("Hello, World!");
        }
    }
}