using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using DuneWarLastFantasy.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Xml.Linq;

namespace DuneWarLastFantasy.Service
{
    public class ProductSevice
    {
        ProductRepository _productRepository;
        UnitOfWork _unitOfWork;
        public ProductSevice(ProductRepository productRepository, UnitOfWork unitOfWork)
        {
            _productRepository = productRepository;
            _unitOfWork = unitOfWork;
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
            try
            {
                await _productRepository.AddProduct(product);
                _unitOfWork.Save();
            }
            catch (Exception ex) {
            
            }
            return false;
        }
        public async Task<bool> InsertProduct(string name)
        {
            try
            {
                await _productRepository.InsertProduct(name);
                _unitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
return false;
            }
            
        }

        public async Task<bool> DeleteProduct(int id)
        {
            return await _productRepository.DeleteProduct(id);
        }
        public IEnumerable<Product> ProductAllStore()
        {
            return _productRepository.ProductAllStore();
        }
    }
 
    
}
