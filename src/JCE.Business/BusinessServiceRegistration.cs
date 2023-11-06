using JCE.Business.Services;
using JCE.Business.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace JCE.Business;

public static class BusinessServiceRegistration
{
        public static IServiceCollection AddBusinessServices(this IServiceCollection services)
        {
                services.AddScoped<IAuthService, AuthService>();
                services.AddScoped<IErrorService, ErrorService>();
                services.AddScoped<IPayorService, PayorService>();
                services.AddScoped<IProfileService, ProfileService>();
                return services;
        }
}
