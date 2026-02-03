using DuneWarLastFantasy;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
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

        public ScoreController(ILogger<HomeController> logger,
            AppContextPostgree context,
            HomeSevice homeSevice,
            ScoreSevice scoreSevice)
        {
            _logger = logger;
            _context = context;
            _homeSevice = homeSevice;
            _scoreService = scoreSevice;
        }

        [HttpGet("GetScoreList")]
        public Task<IQueryable<Score>> GetScoreList()
        {

            return _scoreService.GetScoreList();
        }

        


    }
}
