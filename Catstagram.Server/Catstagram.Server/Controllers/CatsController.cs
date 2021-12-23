namespace Catstagram.Server.Controllers
{
    using Catstagram.Server.Data;
    using Catstagram.Server.Data.Models;
    using Catstagram.Server.Infrastucture;
    using Catstagram.Server.Models.Cats;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Security.Claims;

    public class CatsController : ApiBaseController
    {
        private readonly CatstagramDbContext db;

        public CatsController(CatstagramDbContext db)
        {
            this.db = db;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Create(CreateCatRequestModel model)
        {
            var userId = this.User.GetId();

            var cat = new Cat
            {
                Description = model.Description,
                ImgeUrl = model.ImageUrl,
                UserId = userId,
            };

            await this.db.AddAsync(cat);
            await this.db.SaveChangesAsync();

            return Created(nameof(this.Create), cat.Id);
        }
    }
}
