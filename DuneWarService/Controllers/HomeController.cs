using System.Diagnostics;
using DuneWarLastFantasy;
using DuneWarLastFantasy.Models;
using Microsoft.AspNetCore.Mvc;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        AppContextPostgree _context;

        public HomeController(ILogger<HomeController> logger, AppContextPostgree context)
        {
            _logger = logger;
            _context = context;
        }
        [HttpGet("GetVersion")]
        public string GetVersion()
        {
            
            return "1.0.0";
        }
        [HttpGet("GetScore")]
        public List<Score> GetScore()
        {
            List<Score> scoreList = _context.Score.ToList();
            return scoreList;
        }



        [HttpGet("GetMethod")]
        public string GetMethod()
        {
            string methodName = ControllerContext.ActionDescriptor.ActionName;
            return methodName;
        }

        [HttpPost("GetStatus")]
        public string GetStatus()
        {
            return "Alfa";
        }

    }
}
