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
        [HttpGet("GetArticle")]
        public List<Article> GetArticle()
        {
            //Article автозаполн€ютс€ авторами если р€дом выт€гивваешь.
            List<Author> authorList = _context.Author.ToList();
            List<Article> articleList = _context.Article.ToList();
            return articleList;
        }
        [HttpGet("GetAuthor")]
        public List<Author> GetAuthor()
        {
            List<Author> scoreList = _context.Author.ToList();
            return scoreList;
        }
        [HttpGet("GetProduct")]
        public List<Product> GetProduct()
        {
            List<Product> scoreList = _context.Product.ToList();
            return scoreList;
        }
        [HttpGet("GetArsenal")]
        public List<Arsenal> GetArsenal()
        {
            List<Arsenal> scoreList = _context.Arsenal.ToList();
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
