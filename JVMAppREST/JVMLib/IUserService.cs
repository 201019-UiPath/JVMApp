using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMLib
{
    public interface IUserService
    {
        void AddUser(User user);
        void DeleteUser(User user);
        List<User> GetAllUsers();
        User GetUserById(int id);
        User GetUserByEmail(string email);
        void UpdateUser(User user);
    }
}
