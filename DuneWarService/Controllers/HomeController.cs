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
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private HomeSevice _homeSevice;
        private ProductSevice _productService;
        AppContextPostgree _context;

        public HomeController(ILogger<HomeController> logger,
            AppContextPostgree context,
            HomeSevice homeSevice,
            ProductSevice productSevice)
        {
            _logger = logger;
            _context = context;
            _homeSevice = homeSevice;
            _productService = productSevice;
        }

        [HttpGet("GetVersion")]
        public string GetVersion()
        {
            var indexList = new List<int>() { 2, 5, 7, 2 }.Select((a, index) => index).ToList();
            return string.Join(".", indexList);
        }

        [HttpPost("GetStatus")]
        public string GetStatus()
        {
            List< Student > studentList = new List<Student>() { new Student(),new Student(),new Student() };
            IEnumerable<Student> enumList = studentList as IEnumerable<Student>;
            foreach (var item in enumList)
            {
                item.StudentId = 6;
            }

            return "Alfa: "+ enumList.Last().StudentId;
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
        public async Task<IActionResult> AddProduct(string name,int arsenalId)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    //Arsenal arsenal = _context.Arsenal.FirstOrDefault();
                    Factory factory = _context.Factory.FirstOrDefault();
                    Product product = new Product()
                    {
                        Name = name,
                        ArsenalID = arsenalId,
                        FactorioID = factory.ID
                    };
                    _productService.AddProduct(product);

                    //_context.Product.Add(product);
                    //_context.SaveChanges();
                    transaction.Commit();
                    return Ok("save");
                }
                catch (Exception ex) {
                    transaction.Rollback();
                }
            }
            return BadRequest("Error save");
        }
        [HttpGet("GetProduct")]
        public async Task<Product> GetProduct(int id)
        {
            return await _productService.GetProduct(id);
        }

        [HttpPut("AddArsenal")]
        public async Task<ActionResult> AddArsenal(string name, int numCannon)
        {
            Arsenal arsenal = new Arsenal()
            {
                Name = name,
                NumCannon = numCannon,
            };

            return Ok( _homeSevice.AddArsenal(arsenal));
  
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
            var res =  await _productService.DeleteProduct(id);
            if (res)
            {
                return Ok("Delete");
            }
            return BadRequest("Error delete");
        }
        [HttpGet("GetProductClassic")]
        public async Task<IEnumerable<Product>> GetProductClassic(bool? isArsenal)
        {
            var productList = await _productService.GetProductClassic(isArsenal);

            return productList;
        }
        [HttpGet("GetProductInclude")]
        public List<Product> GetProductInclude()
        {
            List<Product> productList = _productService.GetProductInclude();
            return productList;
        }

        [HttpGet("GetArsenal")]
        public async Task<IEnumerable<Arsenal>> GetArsenal(int page, int size,bool sort)
        {
            IEnumerable<Arsenal> arsenalList =await _homeSevice.GetArsenal(page, size, sort);
            return arsenalList;
        }
        [HttpGet("GetArsenalWithId")]
        public async Task<Arsenal> GetArsenalWithId(int id)
        {
            Arsenal arsenal = await _homeSevice.GetArsenalWithId(id);
            return arsenal;
        }
        [HttpGet("ArsenalMapList")]
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapList()
        {
            var arsenal = await _homeSevice.ArsenalMapList();
            return arsenal;
        }
        [HttpGet("ArsenalMapProjectToList")]
        public async Task<IEnumerable<ArsenalSlashResponse>> ArsenalMapProjectToList()
        {
            var arsenal = await _homeSevice.ArsenalMapProjectToList();
            return arsenal;
        }

        [HttpGet("ProductAllStore")]
        public async Task<IEnumerable<Product>> ProductAllStore()
        {
            var arsenal =  _productService.ProductAllStore();
            return arsenal;
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



    }
}
