namespace Catstagram.Server.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : ApiBaseController
    {
        [Authorize]
        public ActionResult Get()
        {
            return Ok("Test ok");
        }
    }
}