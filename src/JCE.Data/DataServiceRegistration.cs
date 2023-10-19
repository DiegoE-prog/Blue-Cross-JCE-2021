using JCE.Data.Data;
using JCE.Data.Data.Interfaces;
using JCE.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace JCE.Data;

public static class DataServiceRegistration
{
    public static IServiceCollection AddDataServices(this IServiceCollection services)
    {
        services.AddSingleton<IDataContext, MySQLDataContext>();
        services.AddSingleton<Class1>();
        return services;
    }
}
