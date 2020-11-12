using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JVMDB.Models;
using JVMLib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;

namespace JVMAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }
        [HttpPost("add")]
        [Consumes("application/json")]
        public IActionResult AddUser(User user)
        {
            try
            {
                userService.AddUser(user);
                return CreatedAtAction("AddUser", user);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet("get")]
        [Produces("application/json")]
        public IActionResult GetUserById(int id)
        {
            try
            {
                return Ok(userService.GetUserById(id));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}
