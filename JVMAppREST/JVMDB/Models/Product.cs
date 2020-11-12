using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace JVMDB.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        public decimal cost { get; set; }
        public Category category { get; set; }
        public enum Category
        {
            Beverage,
            Bread,
            CannedGoods,
            Dairy,
            BakingGoods,
            FrozenFood,
            Meat,
            Produce
        }
    }
}
