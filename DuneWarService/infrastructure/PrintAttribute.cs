using Microsoft.AspNetCore.Mvc.Filters;

namespace DuneWarLastFantasy.infrastructure
{
    public class PrintAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            System.Diagnostics.Debug.WriteLine("#### check authorization");
        }
    }
}
