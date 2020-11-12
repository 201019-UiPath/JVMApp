using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMDB.Repos
{
    interface IProductRepo
    {
        void AddProduct(Product product);
        void DeleteProduct(Product product);
        List<Product> GetAllProducts();
        Product GetProductById(int id);
        void UpdateProduct(Product product);
    }
}
