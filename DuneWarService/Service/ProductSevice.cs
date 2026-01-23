using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DuneWarLastFantasy.Service
{
    public class ProductSevice
    {

        ProductRepository _productRepository;
        public ProductSevice(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<IEnumerable<Product>> GetProductClassic(bool? isArsenal)
        {
            return await _productRepository.GetProductClassic(isArsenal);
        }
        public List<Product> GetProductInclude()
        {
            List<Product> productList = _productRepository.GetProductInclude();
            return productList;
        }
        public async Task<Product> GetProduct(int id)
        {
            return await _productRepository.GetProduct(id);
        }
        public async Task<bool> AddProduct(Product product)
        {
           return await _productRepository.AddProduct(product);
        }
        public async Task<bool> DeleteProduct(int id)
        {
            return await _productRepository.DeleteProduct(id);
        }
    }
 
    
}
