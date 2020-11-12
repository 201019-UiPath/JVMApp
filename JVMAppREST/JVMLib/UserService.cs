using JVMDB.Models;
using System.Collections.Generic;
using JVMDB.Repos;

namespace JVMLib
{
    public class UserService : IUserService
    {
        private IUserRepo repo;

        public UserService(IRepo repo)
        {
            this.repo = repo;
        }

        public void AddUser(User user)
        {
            repo.AddUser(user);
        }

        public void DeleteUser(User user)
        {
            repo.DeleteUser(user);
        }

        public List<User> GetAllUsers()
        {
            List<User> users = repo.GetAllUsers();
            return users;
        }

        public User GetUserById(int id)
        {
            User user = repo.GetUserById(id);
            return user;
        }
        public User GetUserByEmail(string email)
        {
            User user = repo.GetUserByEmail(email);
            return user;
        }

        public void UpdateUser(User user)
        {
            repo.UpdateUser(user);
        }
    }
}
