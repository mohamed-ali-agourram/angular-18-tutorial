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
# skip styles / test / html
ng generate component component-name --style none --skip-tests --inline-template
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
## APIS ARE USED FROM

[freeapis.miniprojectideas](https://freeapi.miniprojectideas.com/index.html)

### Data Binding in Angular

In Angular, the way of binding data using the NgModule system is referred to as **data binding**. It can be categorized as follows:

- **Data Binding**: The general term for the communication between the component and the view (template).
  
- **One-Way Data Binding**: This includes both interpolation and property binding, where data flows in one direction (from the component to the view).
  
- **Two-Way Data Binding**: This allows for data to flow in both directions (between the component and the view).

#### Types of Data Binding

1. **Interpolation**: 
   - A one-way data binding technique that allows you to display component properties in the template using the syntax `{{ }}`.

2. **Property Binding**: 
   - Binds a property of a DOM element to a property in the component class.

3. **Event Binding**: 
   - Allows you to listen to events (like clicks) on DOM elements and execute methods in the component class in response.

4. **Two-Way Data Binding**: 
   - A combination of property and event binding that allows for automatic synchronization of data between the component and the view, commonly implemented using `[(ngModel)]`.

5. **Event Binding**: 
   - Allows you to listen to events (like clicks) on DOM elements and execute methods in the component class in response.
   - **Syntax**: Uses parentheses (`( )`) around the event name.
   - **Example**: 
     ```html
     <button (click)="onButtonClick()">Click Me!</button>
     ```
   - In the component:
     ```typescript
     onButtonClick() {
         console.log('Button was clicked!');
     }
     ```
     In Angular, `$event` represents the **event object** associated with a particular user interaction, such as a click, input, or form submission. You can access this object inside your component methods to:
      - Inspect the event details (like target elements).
      - Use event methods such as `preventDefault()` or `stopPropagation()`.
      ``` typescript
        export class RolesComponent {
          role: string = '';
          state: string = '';

          showWelcomeAlert(e: Event) {
            e.preventDefault();
            alert(`Role: ${this.role}, State: ${this.state}`);
          }
        }
      ```
      ``` html
        <button class="border rounded p-2" (click)="showWelcomeAlert($event)">Click</button>
      ```
   - **Common Use Cases**: Event binding is typically used for user interactions, such as clicks, key presses, mouse movements, and form submissions. It allows you to define what happens in response to these actions, making your application interactive and responsive to user inputs.