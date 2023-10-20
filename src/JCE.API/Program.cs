using JCE.Data;
using JCE.Business;
using JCE.Data.Helpers;
using JCE.Data.Data;
using JCE.Data.Data.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDataServices();
builder.Services.AddBusinessServices();

builder.Services.AddControllers();

builder.Services.Configure<ConnectionString>(builder.Configuration.GetSection(nameof(ConnectionString)));



var app = builder.Build();

// Configure the HTTP request pipeline.

// Initialize database if not exists
{
    using var scope = app.Services.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<IDataContext>();
    await context.Init();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();