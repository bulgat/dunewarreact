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
        [HttpGet("GetVersion")]
        public string GetVersion()
        {
            return "1.0.0";
        }

        [HttpGet("GetUnitList")]
        public string GetUnitList()
        {
            return "Version = 890 j";
        }

    }
}
