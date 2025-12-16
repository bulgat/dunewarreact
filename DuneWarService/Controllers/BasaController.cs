using DuneWarLastFantasy.model;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasaController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public BasaController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpPost("GetUnitList")]
        public List<GridCrewScience> GetUnitList()
        {
            return MainModel.InitBasaPurchaseUnitScience_ar;
        }
        [HttpPost("GetRevealedSecret")]
        public int GetRevealedSecret([FromBody] int userId)
        {
            return 5+userId;
        }
    }
}
