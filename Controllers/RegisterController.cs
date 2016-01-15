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
    public class RegisterController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger _logger;

        public RegisterController(
            UserManager<ApplicationUser> userManager,
            ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _logger = loggerFactory.CreateLogger<AccountController>();
        }
        
        [HttpPost("api/register")]
        public async Task<RegisterResponse> Register([FromBody] RegisterRequest model)
        {
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                _logger.LogInformation("User created a new account with password.");
                return new RegisterResponse 
                {
                    WasSuccessful = true
                };
            }
            else
            {
                return new RegisterResponse 
                {
                    WasSuccessful = false,
                    Errors = result.Errors.Select(e => e.Description).ToArray()  
                };
            }
        }
    }
    
    public class RegisterRequest {
        public string Email;
        
        public string Password;
    }
    
    public class RegisterResponse {
        public bool WasSuccessful { get; set; }
        
        public string[] Errors { get; set; }
    }
}
