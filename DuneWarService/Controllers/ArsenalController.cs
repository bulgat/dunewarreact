using DuneWarLastFantasy.model;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArsenalController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ArsenalSevice _arsenalSevice;

        public ArsenalController(ILogger<HomeController> logger, ArsenalSevice arsenalSevice)
        {
            _logger = logger;
            _arsenalSevice = arsenalSevice;
        }
        [HttpPatch("PatchArsenal")]
        public async Task<bool> PatchArsenal(int id, string name, int numCannon,[FromQuery] List<int> productList)
        {

            Arsenal arsenal = new Arsenal();
            arsenal.ID = id;
            arsenal.Name = name;
            arsenal.NumCannon = numCannon;
    
            _arsenalSevice.UpdateArsenal(arsenal);
        
            return true;
        }
    }
}
