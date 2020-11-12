using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMDB.Repos
{
    public interface IUserProductRepo
    {
        void AddUserProduct(UserProduct userProduct);
        void DeleteUserProduct(UserProduct userProduct);
        List<UserProduct> GetAllUserProducts();
        List<UserProduct> GetAllProductsForUser(int userId);
        UserProduct GetUserProductById(int id);
        UserProduct GetUserProduct(int userId, int productId);
        void UpdateUserProduct(UserProduct userProduct);
    }
}
