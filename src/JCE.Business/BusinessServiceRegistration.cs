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
            services.AddScoped<IProviderService, ProviderService>();
            services.AddScoped<IMemberService, MemberService>();
            services.AddScoped<IProfileService, ProfileService>();
            services.AddScoped<ISecurityQuestionsService, SecurityQuestionsService>();
            return services;
    }
}
