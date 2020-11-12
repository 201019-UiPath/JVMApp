using JVMDB.Models;
using System.Collections.Generic;
using JVMDB.Repos;

namespace JVMLib
{
    public class ProductService : IProductService
    {
        private IProductRepo repo;

        public ProductService(IProductRepo repo)
        {
            this.repo = repo;
        }
        
        public void AddProduct(Product product)
        {
            repo.AddProduct(product);
        }

        public void DeleteProduct(Product product)
        {
            repo.DeleteProduct(product);
        }

        public List<Product> GetAllProducts()
        {
            List<Product> products = repo.GetAllProducts();
            return products;
        }

        public Product GetProductById(int id)
        {
            Product product = repo.GetProductById(id);
            return product;
        }

        public void UpdateProduct(Product product)
        {
            repo.UpdateProduct(product);
        }
    }
}
