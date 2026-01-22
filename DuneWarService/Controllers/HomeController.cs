using DuneWarLastFantasy;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private HomeSevice _homeSevice;
        private ProductSevice _productSevice;
        AppContextPostgree _context;

        public HomeController(ILogger<HomeController> logger,
            AppContextPostgree context,
            HomeSevice homeSevice,
            ProductSevice productSevice)
        {
            _logger = logger;
            _context = context;
            _homeSevice = homeSevice;
            _productSevice = productSevice;
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
        [HttpPut("AddProduct")]
        public async void AddProduct(string name)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    Arsenal arsenal = _context.Arsenal.FirstOrDefault();
                    Factory factory = _context.Factory.FirstOrDefault();
                    Product product = new Product()
                    {
                        Name = name,
                        ArsenalID = arsenal.ID,
                        FactorioID = factory.ID
                    };

                    _context.Product.Add(product);
                    _context.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception ex) {
                    transaction.Rollback();
                }
            }
        }
        [HttpPut("AddArsenal")]
        public async void AddArsenal(string name, int numCannon)
        {
            Arsenal arsenal = new Arsenal()
            {
                Name = name,
                NumCannon = numCannon
            };

            _context.Arsenal.Add(arsenal);
            _context.SaveChangesAsync();

        }
        [HttpPatch("PatchArsenal")]
        public async void PatchArsenal(string name, int numCannon)
        {
            Arsenal arsenal = _context.Arsenal.FirstOrDefault();
            arsenal.Name = name;
            arsenal.NumCannon = numCannon;
            _context.Arsenal.Update(arsenal);
            _context.SaveChangesAsync();

        }
        [HttpDelete("DeleteProduct")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var res =  await _productSevice.DeleteProduct(id);
            if (res)
            {
                return Ok("Delete");
            }
            return BadRequest("Error delete");
        }
        [HttpGet("GetProductClassic")]
        public async Task<List<Product>> GetProductClassic(bool? isArsenal)
        {
            var productList = await _productSevice.GetProductClassic(isArsenal);

            return productList;
        }
        [HttpGet("GetProductInclude")]
        public List<Product> GetProductInclude()
        {
            List<Product> productList = _context.Product.Include(a=>a.Arsenal).Include(b=>b.Factorio).ToList();
            return productList;
        }
        [HttpGet("GetArsenal")]
        public List<Arsenal> GetArsenal(bool sort)
        {
            List<Arsenal> arsenalList = _homeSevice.GetArsenal(sort);
            return arsenalList;
        }
        [HttpGet("ArsenalCount")]
        public int ArsenalCount(bool sort)
        {
            int arsenalCount = _homeSevice.ArsenalCount(sort);
            return arsenalCount;
        }

        [HttpGet("GetFactory")]
        public List<Factory> GetFactory()
        {
            
            List<Factory> scoreList = _context.Factory.ToList();
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
