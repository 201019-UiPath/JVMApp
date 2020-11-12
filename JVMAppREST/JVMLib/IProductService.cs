using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMLib
{
    public interface IProductService
    {
        void AddProduct(Product product);
        void DeleteProduct(Product product);
        List<Product> GetAllProducts();
        Product GetProductById(int id);
        void UpdateProduct(Product product);
    }
}
