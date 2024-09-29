# Angular18AdminPanelSidebar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## For Setup By Default Port Number Changes

projects:{
    "serve": {
          "options": {
            "port": 4209
          },
        "builder": "@angular-devkit/build-angular:dev-server",
        "configurations": {
            "production": {
              "buildTarget": "angular_18_admin_panel_sidebar:build:production"
            },
        "development": {
              "buildTarget": "angular_18_admin_panel_sidebar:build:development"
            }
          },
        "defaultConfiguration": "development"
        },
   }



## GITHUB Deployed  

## npm install ghPages

1) Url for => https:// {{profile Name }}. github.io/{{repo Name}}

2)  ng build --base-href "https://sptechguru.github.io/projects/"

3)  npx angular-cli-ghPages --dir=dist/projectS/browser

4)  this cmd will create a ghpages branch your repo an publish code also Now in Github do following setup.

## GO TO SETTING GITHUB PAGES

5) Select Main Branch and Save wait for some time Then change to ghPages & Save run below cmd your project 

6) npx angular-cli-ghPages --dir=dist/projects/browser 