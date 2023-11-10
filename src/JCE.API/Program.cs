using JCE.Data;
using JCE.Business;
using JCE.Data.Helpers;
using JCE.Data.Data;
using JCE.Data.Data.Interfaces;
using FluentMigrator.Runner;
using JCE.Data.Data.Migrations;
using Microsoft.Extensions.DependencyInjection;
using JCE.Data.Data.Migrations;
using FluentMigrator.Runner;
using Microsoft.Extensions.DependencyInjection;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDataServices();
builder.Services.AddBusinessServices();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.Configure<ConnectionString>(builder.Configuration.GetSection(nameof(ConnectionString)));

var connectionString =
           $"Server={builder.Configuration["ConnectionString:Server"]};" +
           $"Database={builder.Configuration["ConnectionString:Database"]};" +
           $"Uid={builder.Configuration["ConnectionString:Uid"]};" +
           $"Pwd={builder.Configuration["ConnectionString:Pwd"]}";

Console.WriteLine(builder.Configuration["ConnectionString.Server"]);

builder.Services.AddFluentMigratorCore()
    .ConfigureRunner(rb => rb.AddMySql5()
                        .WithGlobalConnectionString(connectionString)
                        .ScanIn(typeof(CreateUserTable).Assembly).For.Migrations()
                        .ScanIn(typeof(CreateNewError).Assembly).For.Migrations()
                        .ScanIn(typeof(CreatePayors).Assembly).For.Migrations()
                        .ScanIn(typeof(CreateNewErrorFix).Assembly).For.Migrations()
                        .ScanIn(typeof(CreateSecurityQuestions).Assembly).For.Migrations()
                        .ScanIn(typeof(AddSoftDeleteToUserTable).Assembly).For.Migrations()
                        );

//// ... otros servicios que puedas necesitar

//var serviceProvider = builder.Services.BuildServiceProvider();

//// Ejecuci�n del rollback
//using var scope = serviceProvider.CreateScope();
//var runner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();

//// Ejecutar el rollback para una migraci�n espec�fica
//runner.MigrateDown(1); // Revierte una migraci�n


var app = builder.Build();

// Configure the HTTP request pipeline.

// Initialize database if not exists
{
    using var scope = app.Services.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<IDataContext>();
    await context.Init();
}

// Perform migration

{
    using var scope = app.Services.CreateScope();
    var runner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
    runner.MigrateUp();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();