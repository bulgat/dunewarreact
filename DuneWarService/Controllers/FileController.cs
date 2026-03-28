using DuneWarLastFantasy.model;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class FileController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public FileController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [AllowAnonymous]
        [HttpPost("Upload")]
        public List<GridCrewScience> Upload()
        {
            return null;
        }
 
    }
}
