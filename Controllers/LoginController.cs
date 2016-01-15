using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Logging;
using WindtalkerVnext.Models;
using WindtalkerVnext.Services;
using WindtalkerVnext.ViewModels.Account;

namespace WindtalkerVnext.Controllers
{
    public class LoginController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public LoginController(
            SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }
        
        [HttpPost]
        public async Task<LoginResponseDto> Login(LoginRequestDto model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, false);
            var response = new LoginResponseDto 
            {
                WasSuccessful = result.Succeeded    
            };
            return response;
        }
    }
    
    public class LoginRequestDto 
    {
        public string Email { get; set; }
        
        public string Password { get; set; }    
    }
    
    public class LoginResponseDto
    {
        public bool WasSuccessful { get; set; }
        
        public string[] Errors { get; set; } 
    }
}
