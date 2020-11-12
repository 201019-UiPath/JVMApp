using JVMDB.Models;
using System.Collections.Generic;

namespace JVMDB.Repos
{
    public interface IRepo : IProductRepo, IUserProductRepo, IUserRepo
    {
        
    }
}