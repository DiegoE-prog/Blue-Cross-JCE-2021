# C# Code Conventions

This document outlines the coding conventions and best practices to follow when writing C# code for this project. Consistency in coding style and conventions is essential to ensure readability and maintainability of the codebase.

## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [Formatting and Indentation](#formatting-and-indentation)
3. [Comments](#comments)
4. [Classes and Structures](#classes-and-structures)
5. [Methods](#methods)
6. [Variables](#variables)
7. [Exceptions](#exceptions)

## Naming Conventions

- **Namespace Names**: Use PascalCase for namespace names. Keep them concise and indicative of the project's purpose.

    ```csharp
    namespace MyProject.Utilities
    ```

- **Class and Interface Names**: Use PascalCase for class and interface names. Make them descriptive and clear.

    ```csharp
    public class CustomerService { }
    public interface ILogger { }
    ```

- **Method Names**: Use PascalCase for method names. Use descriptive names that indicate the method's purpose.

    ```csharp
    public void CalculateTotalPrice() { }
    ```

- **Variable Names**: Use camelCase for variable names. Make variable names meaningful.

    ```csharp
    int itemCount = 10;
    ```

- **Constant Names**: Use UPPERCASE_SNAKE_CASE for constants.

    ```csharp
    const int MAX_RETRIES = 3;
    ```

- **Field Names**: Use _camelCase for private field names. Prefix them with an underscore.

    ```csharp
    private string _name;

## Formatting and Indentation

- Use four spaces for indentation. Do not use tabs.
- Keep lines under 100 characters whenever possible.
- Use braces on new lines for code blocks.

    ```csharp
    if (condition)
    {
        // Code here
    }
    ```

- Always use meaningful indentation.

## Comments

- Use XML comments to document classes, methods, and parameters.
- Write clear and concise comments that explain the purpose and usage of the code.

## Classes and Structures

- Use a single class per file.
- Avoid overly large classes. Consider refactoring if a class becomes too complex.

## Methods

- Keep methods concise and focused on a single task.
- Avoid methods with too many parameters. Use objects or structures to pass multiple values.
- Follow the Single Responsibility Principle.

## Variables

- Declare variables close to their usage.
- Avoid using overly short or cryptic variable names. Be descriptive.

## Exceptions

- Only catch exceptions that you can handle effectively. Avoid empty catch blocks.
- Use meaningful exception messages to aid in debugging.
- Avoid using exceptions for control flow.


## Acknowledgments

- [Microsoft C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions)
- [C# Coding Guidelines](https://csharpcodingguidelines.com/)

  
