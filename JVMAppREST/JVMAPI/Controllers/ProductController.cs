using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JVMDB.Models;
using JVMLib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JVMAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;
        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }
        [HttpPost("add")]
        [Consumes("application/json")]
        public IActionResult AddProduct(Product product)
        {
            try
            {
                productService.AddProduct(product);
                return CreatedAtAction("AddUser", product);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpDelete("delete")]
        [Consumes("application/json")]
        public IActionResult DeleteProduct(Product product)
        {
            try
            {
                productService.DeleteProduct(product);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpGet("get")]
        [Produces("application/json")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                return Ok(productService.GetProductById(id));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpGet("getAll")]
        [Produces("application/json")]
        public IActionResult GetAllUsers()
        {
            try
            {
                return Ok(productService.GetAllProducts());
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpPut("update")]
        [Consumes("application/json")]
        public IActionResult UpdateUser(Product product)
        {
            try
            {
                productService.UpdateProduct(product);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
