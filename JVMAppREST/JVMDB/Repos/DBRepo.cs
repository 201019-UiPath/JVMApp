using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMDB.Repos
{
    public class DBRepo : IProductRepo, IUserProductRepo, IUserRepo
    {
        #region Product Methods
        public void AddProduct(Product product)
        {
            throw new NotImplementedException();
        }
        public void DeleteProduct(Product product)
        {
            throw new NotImplementedException();
        }
        public List<Product> GetAllProducts()
        {
            throw new NotImplementedException();
        }
        public Product GetProductById(int id)
        {
            throw new NotImplementedException();
        }
        public void UpdateProduct(Product product)
        {
            throw new NotImplementedException();
        }
        #endregion
        #region User Methods
        public void AddUser(User user)
        {
            throw new NotImplementedException();
        }
        public void DeleteUser(User user)
        {
            throw new NotImplementedException();
        }
        public List<User> GetAllUsers()
        {
            throw new NotImplementedException();
        }
        public User GetUserById(int id)
        {
            throw new NotImplementedException();
        }
        public void AddUserProduct(UserProduct userProduct)
        {
            throw new NotImplementedException();
        }
        public void UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
        #endregion
        #region UserProduct Methods
        public void DeleteUserProduct(UserProduct userProduct)
        {
            throw new NotImplementedException();
        }
        public List<UserProduct> GetAllUserProducts()
        {
            throw new NotImplementedException();
        }
        public UserProduct GetUserProduct(int userId, int productId)
        {
            throw new NotImplementedException();
        }

        public UserProduct GetUserProductById(int id)
        {
            throw new NotImplementedException();
        }
        public void UpdateUserProduct(UserProduct userProduct)
        {
            throw new NotImplementedException();
        }
        #endregion

    }
}
