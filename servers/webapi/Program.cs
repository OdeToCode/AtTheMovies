using System;
using AtTheMovies.Configuration;
using Microsoft.Owin.Hosting;

namespace AtTheMovies
{
    class Program
    {
        static void Main()
        {
            using (WebApp.Start<Startup>("http://localhost:8080"))
            {
                Console.WriteLine("Listening on port 8080");
                Console.ReadLine();
            }
        }
    }   
}
