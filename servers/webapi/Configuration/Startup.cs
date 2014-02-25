using System.Web.Http;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Newtonsoft.Json.Serialization;
using Owin;

namespace AtTheMovies.Configuration
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            UseStaticFiles(app);
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

        private void UseStaticFiles(IAppBuilder app)
        {
            app.UseFileServer(new FileServerOptions
            {
                FileSystem = new PhysicalFileSystem(@"..\..\..\..\clients"),
                EnableDefaultFiles = true
            });
        }
    }
}