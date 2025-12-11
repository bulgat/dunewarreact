using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpGet(Name = "GetVersion")]
        public string GetVersion()
        {
            return "Version = 890ljklj";
        }

 

    }
}
