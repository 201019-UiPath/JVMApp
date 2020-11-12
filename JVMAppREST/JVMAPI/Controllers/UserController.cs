using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JVMDB.Models;
using JVMLib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure.Internal;

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
                var newUser = new User()
                {
                    name = user.name,
                    email = user.email
                };
                userService.AddUser(newUser);
                return CreatedAtAction("AddUser", newUser);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpDelete("delete")]
        [Consumes("application/json")]
        public IActionResult DeleteUser(User user)
        {
            try
            {
                userService.DeleteUser(user);
                return Ok();
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
        [HttpGet("get/{email}")]
        [Produces("application/json")]
        public IActionResult GetUserByEmail(string email)
        {
            try
            {
                return Ok(userService.GetUserByEmail(email));
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
                return Ok(userService.GetAllUsers());
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
        [HttpPut("update")]
        [Consumes("application/json")]
        public IActionResult UpdateUser(User user)
        {
            try
            {
                userService.UpdateUser(user);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
