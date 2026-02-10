using DuneWarLastFantasy;
using DuneWarLastFantasy.model;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ArsenalSevice _arsenalSevice;
        AppContextPostgree _context;
        private ProductSevice _productService;

        public ProductController(ILogger<HomeController> logger, ArsenalSevice arsenalSevice,
            AppContextPostgree context, ProductSevice productService)
        {
            _logger = logger;
            _arsenalSevice = arsenalSevice;
            _context = context;
            _productService = productService;
        }
        [HttpPut("AddProduct")]
        public async Task<IActionResult> AddProduct(string name, int arsenalId)
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
                catch (Exception ex)
                {
                    transaction.Rollback();
                }
            }
            return BadRequest("Error save");
        }

        [HttpPut("InsertProduct")]
        public async Task<IActionResult> InsertProduct(string name)
        {
           
                   var result = await _productService.InsertProduct(name);


            if (result)
            {
                return Ok("save");
            }

            return BadRequest("Error save");
        }

        [HttpGet("GetProduct")]
        public async Task<Product> GetProduct(int id)
        {
            return await _productService.GetProduct(id);
        }
    }
}
