using JVMDB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace JVMDB.Repos
{
    public class DBRepo :  IRepo
    {
        private readonly DBContext context;
        public DBRepo(DBContext context)
        {
            this.context = context;
        }
        #region Product Methods
        public void AddProduct(Product product)
        {
            context.Products.Add(product);
            context.SaveChanges();
        }
        public void DeleteProduct(Product product)
        {
            var entity = context.Products.Single(p => p.id == product.id);
            context.Remove(entity);
            context.SaveChanges();
        }
        public List<Product> GetAllProducts()
        {
            return context.Products.Select(x => x).ToList();
        }
        public Product GetProductById(int id)
        {
            return context.Products.Single(p => p.id == id);
        }
        public void UpdateProduct(Product product)
        {
            var existingProduct = context.Products.Single(x => x.id == product.id);
            existingProduct.name = product.name;
            existingProduct.cost = product.cost;
            existingProduct.category = product.category;
            context.Entry(existingProduct).State = EntityState.Modified;
            context.SaveChanges();
        }
        #endregion
        #region User Methods
        public void AddUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
        }
        public void DeleteUser(User user)
        {
            var entity = context.Users.Single(p => p.id == user.id);
            context.Remove(entity);
            context.SaveChanges();
        }
        public List<User> GetAllUsers()
        {
            return context.Users.Select(x => x).ToList();
        }
        public User GetUserById(int id)
        {
            return context.Users.Single(p => p.id == id);
        }
        public User GetUserByEmail(string email)
        {
            return context.Users.Single(p => p.email== email);
        }
        public void UpdateUser(User user)
        {
            var existingUser = context.Users.Single(x => x.id == user.id);
            existingUser.name = user.name;
            existingUser.email = user.email;
            context.Entry(existingUser).State = EntityState.Modified;
            context.SaveChanges();
        }
        #endregion
        #region UserProduct Methods
        public void AddUserProduct(UserProduct userProduct)
        {
            context.UserProducts.Add(userProduct);
            context.SaveChanges();
        }
        public void DeleteUserProduct(UserProduct userProduct)
        {
            var entity = context.UserProducts.Single(p => p.id == userProduct.id);
            context.Remove(entity);
            context.SaveChanges();
        }
        public List<UserProduct> GetAllUserProducts()
        {
            return context.UserProducts
                .Select(x => x)
                .Include(x => x.product)
                .Include(x => x.user)
                .ToList();
        }
        public List<UserProduct> GetAllProductsForUser(int userId)
        {
            return context.UserProducts
                .Where(x => x.userId == userId)
                .Include(x => x.product)
                .Include(x => x.user)
                .ToList();
        }
        public UserProduct GetUserProduct(int userId, int productId)
        {
            return context.UserProducts
                .Where(p => p.userId == userId && p.productId == productId)
                .Include(x => x.product)
                .Include(x => x.user)
                .First();
        }

        public UserProduct GetUserProductById(int id)
        {
            return context.UserProducts
                .Where(p => p.id == id)
                .Include(x => x.product)
                .Include(x => x.user)
                .First();
        }
        public void UpdateUserProduct(UserProduct userProduct)
        {
            var existingUserProduct = context.UserProducts.Single(x => x.id == userProduct.id);
            existingUserProduct.userId = userProduct.userId;
            existingUserProduct.productId = userProduct.productId;
            context.Entry(existingUserProduct).State = EntityState.Modified;
            context.SaveChanges();
        }
        #endregion
    }
}
