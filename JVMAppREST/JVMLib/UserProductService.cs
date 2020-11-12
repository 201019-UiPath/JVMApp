using JVMDB.Models;
using System.Collections.Generic;
using JVMDB.Repos;

namespace JVMLib
{
    public class UserProductService : IUserProductService
    {
        private IUserProductRepo repo;

        public UserProductService(IRepo repo)
        {
            this.repo = repo;
        }

        public void AddUserProduct(UserProduct userProduct)
        {
            repo.AddUserProduct(userProduct);
        }

        public void DeleteUserProduct(UserProduct userProduct)
        {
            repo.DeleteUserProduct(userProduct);
        }

        public List<UserProduct> GetAllUserProducts()
        {
            List<UserProduct> userProducts = repo.GetAllUserProducts();
            return userProducts;
        }

        public List<UserProduct> GetAllProductsForUser(int userId)
        {
            List<UserProduct> userProducts = repo.GetAllProductsForUser(userId);
            return userProducts;
        }

        public UserProduct GetUserProduct(int userId, int productId)
        {
            UserProduct userProduct = repo.GetUserProduct(userId, productId);
            return userProduct;
        }

        public UserProduct GetUserProductById(int id)
        {
            UserProduct userProduct = repo.GetUserProductById(id);
            return userProduct;
        }

        public void UpdateUserProduct(UserProduct userProduct)
        {
            repo.UpdateUserProduct(userProduct);
        }
    }
}
