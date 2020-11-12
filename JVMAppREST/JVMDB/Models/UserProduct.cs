using System;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using System.Text;

namespace JVMDB.Models
{
    public class UserProduct
    {
        public int id { get; set; }
        public int userId { get; set; }
        public int productId { get; set; }
    }
}
