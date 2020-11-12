using JVMDB.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JVMDB.Repos
{
    interface IUserRepo
    {
        void AddUser(User user);
        void DeleteUser(User user);
        List<User> GetAllUsers();
        User GetUserById(int id);
        void UpdateUser(User user);
    }
}
