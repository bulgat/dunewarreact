using DuneWarLastFantasy.Models.other;

namespace DuneWarLastFantasy.Repository
{
    public class ProductRepositoryIndex
    {
        private Dictionary<string, Product> products;

        public ProductRepositoryIndex()
        {
            products = new Dictionary<string, Product>();
        }

        public Product this[string name]
        {
            get { return products[name]; }
            set { products[name] = value; }
        }
    }
}
