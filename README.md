# Angular 18

## 1. Installation  
To install Angular CLI globally, use the following command:  

``` Bash
npm install -g @angular/cli@18
```
Verify the installation:  

``` Bash
ng version
```
---

## 2. Creating a New Project  
To create a new Angular project with standalone components:  

``` Bash
ng new my-angular-app --standalone
```
Navigate to the project directory:  

``` Bash
cd my-angular-app
```
Serve the application locally:  

``` Bash
ng serve
```
Open your browser and visit `http://localhost:4200` to see your application.

---

## 3. Common Angular CLI Commands  

### Start the Development Server  
``` Bash
ng serve
```
### Generate a Component  
``` Bash
ng generate component component-name
# or
ng g c component-name
```
### Add a Service  
``` Bash
ng generate service service-name
```
### Build the Project for Production  
``` Bash
ng build --prod
```
### Update Angular Dependencies  
``` Bash
ng update @angular/core @angular/cli
```
---

## 4. Project Structure Overview  
``` bash
.
├── node_modules/
├── README.md
├── angular.json                 # Angular CLI's main configuration file. Defines build options, server configs,
│                               # asset handling, etc. Controls app behavior during dev and prod builds.
├── src/
│   ├── app/
│   │   ├── app.component.css   # Component-specific CSS for the root component
│   │   ├── app.component.html  # HTML template defining the root component's structure
│   │   ├── app.component.spec.ts # Unit test file for the root component
│   │   ├── app.component.ts    # Root component logic, manages app's core state and behavior
│   │   ├── app.config.ts       # App configuration settings (feature flags, environment variables)
│   │   └── app.routes.ts       # App routing configuration for navigation
│   ├── index.html              # Entry HTML file that loads the Angular app
│   ├── main.ts                 # Main entry point for bootstrapping the Angular application
│   └── styles.css              # Global styles for the entire application
├── tsconfig.app.json           # TypeScript configuration for the app (excluding tests)
├── tsconfig.json               # General TypeScript configuration
└── tsconfig.spec.json          # TypeScript configuration for unit tests
```
