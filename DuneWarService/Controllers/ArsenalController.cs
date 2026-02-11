using DuneWarLastFantasy.DTO.Response;
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

        [HttpGet("GetArsenal")]
        public async Task<IEnumerable<ArsenalResponse>> GetArsenal(int page, int size, bool sort)
        {
            var arsenalList = await _arsenalSevice.GetArsenal(page, size, sort);
            var arsenalResponseList = arsenalList.Select(a => new ArsenalResponse()
            {
                ID = a.ID,
                Name = a.Name,
                NumCannon = a.NumCannon,
                ProductList = a.Products.Select(a => a.Name).ToList(),
            });
            return arsenalResponseList;
        }
        [HttpGet("GetArsenalWithId")]
        public async Task<Arsenal> GetArsenalWithId(int id)
        {
            Arsenal arsenal = await _arsenalSevice.GetArsenalWithId(id);
            return arsenal;
        }
        [HttpGet("ArsenalMapList")]
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapList()
        {
            var arsenal = await _arsenalSevice.ArsenalMapList();
            return arsenal;
        }
        [HttpGet("ArsenalMapProjectToList")]
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapProjectToList()
        {
            var arsenal = await _arsenalSevice.ArsenalMapProjectToList();
            return arsenal;
        }
    }
}
