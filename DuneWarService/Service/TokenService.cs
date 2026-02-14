using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models.Token;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DuneWarLastFantasy.Service
{
    public class TokenService
    {
        private List<Person> people = new List<Person>
        {
            new Person {Login="admin@gmail.com", Password="12345", Role = "admin" },
            new Person { Login="1", Password="1", Role = "user" }
        };

        public TokenResponse Token(string? username, string? password)
        {
            var identity = GetIdentity("1", "1");
            if (identity == null)
            {
                return null;
                //return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            /*
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha512));
            */
            var jwt = new JwtSecurityToken(
      issuer: AuthOptions.ISSUER,
      audience: AuthOptions.AUDIENCE,
      claims: identity.Claims,
      expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
      signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha512Signature));


            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            /*
            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };
            */
            return new TokenResponse()
            {
                Access_token = encodedJwt,
                Username = identity.Name
            };
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            Person person = people.FirstOrDefault(x => x.Login == username && x.Password == password);
            if (person != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, person.Login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, person.Role)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            // если пользователя не найдено
            return null;
        }
    }
}
