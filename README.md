# FormsBuilder Angular Elements Conversion

#### Overview

The goal of this project is to convert existing angular project into Web Components.

**Potential bottlenecks (most common issues):**

- `Change Detection Strategy` (*disable automatic change detection global level It requires quite amount of work to explicitly command the component when to rerende*r)
- `Style source` (_how to import not from global level or enable the View encapsulation Native or put it in a wrapper w/ a bit of unorthodox way of setting up the source styles but not yet possible for material theme CSS_)
- `Debugging` (_how preserve Typescript source file_)

- `Routing` (_How to use Routing in Angular Web Components_)

- `Null Injector` (_It requires quite a bit of manual work and wiring-up_)

#### Development guidelines

Guidelines specific to modules/components in Converting Angular to Web components a web standard for defining new HTML components in a framework-agnostic manner:

- **Component Elements** registered on **AppModule** `ngDoBootstrap`

      ngDoBootstrap() {

      const  elements:  any[] = [[FormBuilderComponent, 'form-builder'], [ParentsComponent, 'parents-components']];


         for (const [component, name] of  elements) {

      	        const  elem  =  createCustomElement(component, { injector: this.injector });

      	        customElements.define(name, elem);
      	    }
      }

#### Instructions

- Run command:

- `npm install` to install dependencies

- `ng serve ` to start app on development server (localhost:4200) for source-mapping

- `npm run build:formBuilderElements` to generate single Javascript Bundle as element.js.
