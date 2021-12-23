namespace Catstagram.Server.Infrastucture
{
    using Catstagram.Server.Data;

    public static class AppBuilderExtentions
    {
        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<CatstagramDbContext>();

            dbContext.Database.EnsureCreated();
        }
    }
}
