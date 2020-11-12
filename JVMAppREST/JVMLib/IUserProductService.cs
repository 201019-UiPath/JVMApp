using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMLib
{
    public interface IUserProductService
    {
        void AddUserProduct(UserProduct userProduct);
        void DeleteUserProduct(UserProduct userProduct);
        List<UserProduct> GetAllUserProducts();
        UserProduct GetUserProductById(int id);
        UserProduct GetUserProduct(int userId, int productId);
        void UpdateUserProduct(UserProduct userProduct);
    }
}
