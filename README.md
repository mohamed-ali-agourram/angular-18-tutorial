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
.
├── node_modules
├── README.md
├── angular.json
│ Angular CLI’s main configuration file. It defines build options, server configurations, asset handling, and more. Changes here control how the app behaves during development and production builds.
│
├── src/
│   ├── app/
│   │   ├── app.component.css
│   │   │ Component-specific CSS for the root component. Keeps styles encapsulated to avoid conflicts.
│   │   ├── app.component.html
│   │   │ HTML template defining the root component’s structure. This serves as the main UI entry point.
│   │   ├── app.component.spec.ts
│   │   │ Unit test file for the root component. Ensures the component behaves as expected through tests.
│   │   ├── app.component.ts
│   │   │ The logic of the root component, managing the app’s core state and behavior.
│   │   ├── app.config.ts
│   │   │ Configuration settings for the app, such as feature flags or environment-specific variables.
│   │   └── app.routes.ts
│   │ Defines the routes for the app. Manages navigation between pages or components.
│   ├── index.html
│   │ The entry HTML file. It loads the Angular app by referencing the necessary scripts and styles.
│   ├── main.ts
│   │ The main entry point for bootstrapping the Angular application. It initializes the root component.
│   └── styles.css
│ Global styles for the entire application. These styles apply across all components unless overridden.
│
├── tsconfig.app.json
│ TypeScript configuration specific to the app (excluding tests). Controls how the code is compiled.
│
├── tsconfig.json
│ General TypeScript configuration, defining module resolution, compiler options, and more.
│
└── tsconfig.spec.json
TypeScript configuration for unit tests. Ensures test files are compiled properly with the necessary settings.

