# ContactList_DotNetCore

An example project using ASP.NET Core and Angular, representing a contact list with CRUD functionality using a REST API.

## Used frameworks/libraries

Frontend: `Angular`, `Bootstrap`    
Backend/API: `ASP.NET Core`, `Entity Framework Core`  
Database: `SQLite`  

## Summary of project structure

- `angularapp` - Angular project root folder
  - `src`
    - `app`
	  - `contactlist`
	    - `add` - Component containing the "Add Contact" view
		- `edit` - Component containing the "Edit Contact" view
		- `index` - Component containin the main view; lists the basic information of all contacts in the database
		- `view` - Component containing the "Contact Details" view
		- `contact.ts` - Interface describing a contact from the database
		- `contact.service.ts` - Service for sending requests to the API through HTTP
		- `contactlist-routing.module.ts` - Routing configuration; binds paths to specific components

- `webapi` - ASP.NET project root folder
  - `Controllers`
    - `ContactsController.cs` - REST API controller, handling database queries
  - `Migrations` - Folder for the generated Migrations from the database context
  - `Models`
    - `Contact.cs` - Database model of the Contact table
  - `ContactsDatabaseContext.cs` - Database structure description, database seeding
  
## Building the application (Windows)

1. Generate a new database file using NuGet `Update-Database` __or__ Place an existing database file in the `webapi` folder
2. Open a terminal window/tab
3. Navigate to the `webapi` folder from project root
4. Run the commands:  

	```
	dotnet restore
	dotnet build
	dotnet watch run
	```

5. Open second terminal window/tab
6. Navigate to the `angularapp` folder from project root
7. Run the commands:  

	```
	npm install 
	npm run build
	npm run start
	```
	
8. Go to `localhost:4200` in your internet browser
	