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
        public async Task<List<Product>> GetProductClassic(bool? isArsenal)
        {
            return await _productRepository.GetProductClassic(isArsenal);
        }
        public async Task<bool> DeleteProduct(int id)
        {
            return await _productRepository.DeleteProduct(id);
        }
    }
 
    
}
