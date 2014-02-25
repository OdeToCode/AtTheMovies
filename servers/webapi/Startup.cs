using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Newtonsoft.Json.Serialization;
using Owin;

namespace AtTheMovies
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            UseClient(app, "ng");
            UseClient(app, "durandal");
            UseClient(app, "ember");
            UseWebApi(app);
        }

        private static void UseWebApi(IAppBuilder app)
        {
            var apiConfiguration = new HttpConfiguration();
            apiConfiguration.MapHttpAttributeRoutes();
            apiConfiguration.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();
            
            app.UseWebApi(apiConfiguration);
        }

        private void UseClient(IAppBuilder app, string client)
        {
            app.UseFileServer(new FileServerOptions
            {
                FileSystem = new PhysicalFileSystem(@"..\..\..\..\clients\" + client),
                EnableDefaultFiles = true,
                RequestPath = new PathString("/" + client)
            });
        }
    }
}