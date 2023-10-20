using JCE.Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly Class1 _class1;
        public HomeController(Class1 class1)
        {
            _class1 = class1;
        }
        // GET: HomeController
        public ActionResult Index()
        {
            _class1.TestConnection();
            return Ok();
        }
    }
}
