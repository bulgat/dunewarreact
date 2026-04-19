using DuneWarLastFantasy;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.infrastructure;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repository;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScoreController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private HomeSevice _homeSevice;
        private ScoreSevice _scoreService;
        AppContextPostgree _context;
        private IHostEnvironment _environment;
        public ScoreController(ILogger<HomeController> logger,
            AppContextPostgree context,
            HomeSevice homeSevice,
            ScoreSevice scoreSevice,
            IHostEnvironment environment)
        {
            _logger = logger;
            _context = context;
            _homeSevice = homeSevice;
            _scoreService = scoreSevice;
            _environment = environment;
        }

        [HttpGet("GetScoreList")]
        public Task<IQueryable<Score>> GetScoreList()
        {
 
            return _scoreService.GetScoreList();
        }
        [HttpGet("AnonymousScoreList")]
        public async Task<IEnumerable<ScoreResponse>> AnonymousScoreList()
        {
            return await _scoreService.AnonymousScoreList();
        }
        
        [HttpGet("GetStudentList")]
        public async Task<IEnumerable<Student>> GetStudentList()
        {

            var kol = await _context.Student.ToListAsync();

            return kol;

        }
        //[RequireHttps]
        [HttpGet("ScoreOData")]
        [PrintAttribute]
        public async Task<IActionResult> ScoreOData()
        {
            var psevdoMassiv = new ProductRepositoryIndex();
            psevdoMassiv["kol"] = new Product() { Name = "kol"};
            var test = psevdoMassiv["kol"];
            return Ok(await _scoreService.AnonymousScoreList());
        }

   
        /*
        //Работающий редирект, но возникает зависание сваггера.
        [HttpGet("GetRedirect")]
        public RedirectToActionResult GetRedirect()
        {
            return RedirectToAction("TestRedirect");
        }

        public string TestRedirect() {

            return "redirect Ok";
        }
        */

    }
}
