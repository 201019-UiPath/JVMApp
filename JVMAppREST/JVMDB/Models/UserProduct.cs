using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata.Ecma335;
using System.Text;

namespace JVMDB.Models
{
    public class UserProduct
    {
        [Key]
        public int id { get; set; }
        [ForeignKey("User_UserProd")]
        public int userId { get; set; }
        public User user { get; set; }
        [ForeignKey("Prod_UserProd")]
        public int productId { get; set; }
        public Product product { get; set; }
        public int quantity { get; set; }
    }
}
