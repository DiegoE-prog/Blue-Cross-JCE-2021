using FluentMigrator;

namespace JCE.Data.Data.Migrations;

[Migration(061120230144)]
public class CreateSecurityQuestions : Migration
{
    public override void Up()
    {
        Create.Table("securityquestions")
            .WithColumn("securityquestionsid").AsInt32().PrimaryKey().Identity()
            .WithColumn("userid").AsInt32().NotNullable()
            .WithColumn("q1answer").AsString(50).NotNullable()
            .WithColumn("q2answer").AsString(50).NotNullable()
            .WithColumn("q3answer").AsString(50).NotNullable()
            .WithColumn("q4answer").AsString(50).NotNullable()
            .WithColumn("q5answer").AsString(50).NotNullable()
            .WithColumn("q6answer").AsString(50).NotNullable()
            .WithColumn("q7answer").AsString(50).NotNullable()
            .WithColumn("q8answer").AsString(50).NotNullable();

        Create.ForeignKey("FK_securityquestions_user")
            .FromTable("securityquestions").ForeignColumn("userid")
            .ToTable("user").PrimaryColumn("userid");

        Insert.IntoTable("securityquestions").Row(new { userid = 1, q1answer = "Vanessa", q2answer = "Link", q3answer = "Hermosillo", q4answer = "BMW", q5answer = "Universidad Tecnológica de León", q6answer = "Soccer", q7answer = "Martha", q8answer = "Pink Floyd"});
        Insert.IntoTable("securityquestions").Row(new { userid = 2, q1answer = "Fernanda", q2answer = "Hulk", q3answer = "Guanajuato", q4answer = "Ford", q5answer = "La Salle Bajio", q6answer = "Football", q7answer = "Juan", q8answer = "AC/DC"});
        Insert.IntoTable("securityquestions").Row(new { userid = 3, q1answer = "Juana", q2answer = "Spider-Man", q3answer = "Leon", q4answer = "Nissan", q5answer = "Universidad Iberoamericana", q6answer = "Baseball", q7answer = "Gustavo", q8answer = "Three Days Grace"});
        Insert.IntoTable("securityquestions").Row(new { userid = 4, q1answer = "Alejandra", q2answer = "Freedy Fazbear", q3answer = "La Paz", q4answer = "Toyota", q5answer = "Tecnológico de Monterrey", q6answer = "Basketball", q7answer = "Martin", q8answer = "Daft Punk"});
        Insert.IntoTable("securityquestions").Row(new { userid = 5, q1answer = "Teresa", q2answer = "Batman", q3answer = "Monterrey", q4answer = "Volkswagen", q5answer = "Escuela Bancaria y Comercial", q6answer = "Box", q7answer = "Daniel", q8answer = "Fallout Boy"});
        Insert.IntoTable("securityquestions").Row(new { userid = 6, q1answer = "Ivonne", q2answer = "Super-Man", q3answer = "Villahermosa", q4answer = "Chrysler", q5answer = "Universidad de León", q6answer = "Volleyball", q7answer = "Enrique", q8answer = "Scorpions"});
        Insert.IntoTable("securityquestions").Row(new { userid = 7, q1answer = "Luz", q2answer = "Iron-Man", q3answer = "Chihuahua", q4answer = "Mazda", q5answer = "Instituto América", q6answer = "Swimming", q7answer = "Alejandro", q8answer = "Iron Maiden"});
        Insert.IntoTable("securityquestions").Row(new { userid = 8, q1answer = "Cecilia", q2answer = "Mario", q3answer = "Colima", q4answer = "Volvo", q5answer = "Universidad de Guanajuato", q6answer = "Karate", q7answer = "Octavio", q8answer = "Sum 41"});
        Insert.IntoTable("securityquestions").Row(new { userid = 9, q1answer = "Denisse", q2answer = "Naruto", q3answer = "CDMX", q4answer = "Dodge", q5answer = "Instituto Politécnico Nacional", q6answer = "Tennis", q7answer = "Marisol", q8answer = "Linkin Park"});
        Insert.IntoTable("securityquestions").Row(new { userid = 10, q1answer = "Andrea", q2answer = "Ben 10", q3answer = "Zacatecas", q4answer = "Kia", q5answer = "Universidad Franciscana de México", q6answer = "Golf", q7answer = "Guillermo", q8answer = "Aerosmith"});
        Insert.IntoTable("securityquestions").Row(new { userid = 11, q1answer = "Ana", q2answer = "Goku", q3answer = "Guadalajara", q4answer = "Pontiac", q5answer = "Universidad Tecnológica de León", q6answer = "Athletics", q7answer = "Diana", q8answer = "Foster the People"});
        Insert.IntoTable("securityquestions").Row(new { userid = 12, q1answer = "Martha", q2answer = "Hombre Lobo-Man", q3answer = "Culiacan", q4answer = "Chevrolet", q5answer = "La Salle Bajio", q6answer = "Judo", q7answer = "Fernanda", q8answer = "Black Eyed Peas"});
    }
    
    public override void Down()
    {
        Delete.Table("securityquestions");
    }

}
