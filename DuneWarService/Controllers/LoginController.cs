using DuneWarLastFantasy;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Security.Claims;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        //HttpContext _context;
        public LoginController(ILogger<HomeController> logger)
        {
            _logger = logger;
            //_context = context;
        }

        [HttpGet("GetPassword")]
        [DisableCors]
        public async Task<ActionResult> GetPassword()
        {
            return Ok("44444444455555555555556666666666666");
        }
        [HttpGet("LoginUser")]
        [AllowAnonymous]
        public async Task<ActionResult> LoginUser(string? name, string? password)
        {
            var claims = new List<Claim> { new Claim("KOL_KRIK", "@MAIL.com") };
            // создаем объект ClaimsIdentity
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Cookies");
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
            return Ok("login success");
        }
        [HttpGet("LoginOut")]
        [AllowAnonymous]
        public async Task<ActionResult> LoginOut()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok("out");
        }
    }
}
