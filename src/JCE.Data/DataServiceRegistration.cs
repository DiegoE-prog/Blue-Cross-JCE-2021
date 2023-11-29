using JCE.Data.Data;
using JCE.Data.Data.Interfaces;
using JCE.Data.Repository;
using JCE.Data.Repository.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using FluentMigrator.Runner;
using System.Runtime.CompilerServices;
using Microsoft.Extensions.Options;
using JCE.Data.Data.Migrations;

namespace JCE.Data;

public static class DataServiceRegistration
{
    public static IServiceCollection AddDataServices(this IServiceCollection services)
    {
            services.AddSingleton<IDataContext, MySQLDataContext>();
            services.AddSingleton<Class1>();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IErrorRepository, ErrorRepository>();
            services.AddScoped<IPayorRepository, PayorRepository>();
            services.AddScoped<IProviderRepository, ProviderRepository>();
            services.AddScoped<IMemberRepository, MemberRepository>();
            services.AddScoped<IProfileRepository, ProfileRepository>();
            services.AddScoped<ISecurityQuestionsRepository, SecurityQuestionsRepository>();
            services.AddScoped<IResetPasswordRepository, ResetPasswordRepository>();
        return services;
    }
}
