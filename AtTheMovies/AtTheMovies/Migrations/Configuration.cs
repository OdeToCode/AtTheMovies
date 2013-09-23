namespace AtTheMovies.Migrations
{
    using AtTheMovies.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MovieDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(AtTheMovies.Models.MovieDb context)
        {
            context.Movies.AddOrUpdate(m => m.Title,
                    new Movie { Title="Star Wars" },
                    new Movie { Title="E.T."},
                    new Movie { Title="Toy Story" }
                );
        }        
    }
}
