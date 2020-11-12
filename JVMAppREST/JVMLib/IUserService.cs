using System;
using System.Collections.Generic;
using System.Text;

namespace JVMLib
{
    interface IUserService
    {
        void AddUser(User user);
        void DeleteUser(User user);
        List<User> GetAllUsers();
        User GetUserById(int id);
        void UpdateUser(User user);
    }
}
