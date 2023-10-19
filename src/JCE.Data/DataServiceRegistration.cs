using JCE.Data.Helpers;
using JCE.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace JCE.Data;

public static class DataServiceRegistration
{
    public static IServiceCollection AddDataServices(this IServiceCollection services)
    {
        services.AddSingleton<DataContext>();
        services.AddSingleton<Class1>();
        return services;
    }
}
