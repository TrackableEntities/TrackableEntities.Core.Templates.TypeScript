# Trackable Entities for EF Core TypeScript Handlebars Templates

Handlebars templates for EF Core scaffolding to generate client-side TypeScript trackable entities. See [trackable-entities-js](https://github.com/TrackableEntities/trackable-entities-js) and [EntityFrameworkCore.Scaffolding.Handlebars](https://github.com/TrackableEntities/EntityFrameworkCore.Scaffolding.Handlebars).

## Usage

1. Install **Trackable Entities for EF Core TypeScript Handlebars Templates**.

    ```
    dotnet new -i TrackableEntities.Core.Templates.TypeScript
    ```

2. Create a **.NET Core Class Library** project.
3. Add Trackable Entities Handlebars templates from the project folder.

    ```
    dotnet new te-templates-typescript
    ```

4. Add the following NuGet packages to the project.
   - Microsoft.EntityFrameworkCore.Design
   - Microsoft.EntityFrameworkCore.SqlServer
   - EntityFrameworkCore.Scaffolding.Handlebars

5.  Add a `ScaffoldingDesignTimeServices` class that implements `IDesignTimeServices`

    ```csharp
    public class ScaffoldingDesignTimeServices : IDesignTimeServices
    {
        public void ConfigureDesignTimeServices(IServiceCollection services)
        {
            // Add Handlebars scaffolding templates
            services.AddHandlebarsScaffolding(ReverseEngineerOptions.EntitiesOnly, LanguageOptions.TypeScript);
        }
    }
    ```

6. From the command-prompt execute the following:
   - Be sure to create the NorthwindSlim database in SQL Local DB, 
     then run the script from bit.ly/northwindslim.

    ```
    dotnet ef dbcontext scaffold "Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=NorthwindSlim; Integrated Security=True" Microsoft.EntityFrameworkCore.SqlServer -o Models -f
    ```

