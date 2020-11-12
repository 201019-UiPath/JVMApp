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
    public class UserProductController : ControllerBase
    {
        private readonly IUserProductService userProductService;
        public UserProductController(IUserProductService userProductService)
        {
            this.userProductService = userProductService;
        }
        [HttpPost("add")]
        [Consumes("application/json")]
        public IActionResult AddUserProduct(UserProduct userProduct)
        {
            try
            {
                userProductService.AddUserProduct(userProduct);
                return CreatedAtAction("AddUser", userProduct);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpDelete("delete")]
        [Consumes("application/json")]
        public IActionResult DeleteUserProduct(UserProduct userProduct)
        {
            try
            {
                userProductService.DeleteUserProduct(userProduct);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        [HttpGet("get")]
        [Produces("application/json")]
        public IActionResult GetUseProductrById(int id)
        {
            try
            {
                return Ok(userProductService.GetUserProductById(id));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpGet("get/{userId}/{productId}")]
        [Produces("application/json")]
        public IActionResult GetUserProduct(int userId, int productId)
        {
            try
            {
                return Ok(userProductService.GetUserProduct(userId, productId));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpGet("getAll")]
        [Produces("application/json")]
        public IActionResult GetAllUserProducts()
        {
            try
            {
                return Ok(userProductService.GetAllUserProducts());
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpPut("update")]
        [Consumes("application/json")]
        public IActionResult UpdateUserProduct(UserProduct userProduct)
        {
            try
            {
                userProductService.UpdateUserProduct(userProduct);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
