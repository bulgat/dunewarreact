using DuneWarLastFantasy;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Models.Token;
using DuneWarLastFantasy.Service;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DuneWarSpeed.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly TokenService _tokenService;
        public LoginController(ILogger<HomeController> logger, TokenService tokenService)
        {
            _logger = logger;
            _tokenService = tokenService;
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

        [HttpGet("GetToken")]
        [AllowAnonymous]
        public IActionResult GetToken(string? username, string? password)
        {
            return Ok(_tokenService.Token("1", "1"));
        }

        [HttpGet("GetPassword")]
        public async Task<ActionResult> GetPassword()
        {
            return Ok("44444444455555555555556666666666666");
        }

        [HttpGet("GetSecondSecret")]
        public async Task<ActionResult> GetSecondSecret()
        {
            SecretResponse secret = new SecretResponse(23, "secret log");

            return Ok(secret.Secret);
        }
    }
}
