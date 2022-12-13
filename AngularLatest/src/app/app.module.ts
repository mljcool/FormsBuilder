import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildrenComponent } from './components/children/children.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [ParentsComponent, ChildrenComponent, FormBuilderComponent, DialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  entryComponents: [FormBuilderComponent, ParentsComponent, DialogComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [[FormBuilderComponent, 'form-builder'], [ParentsComponent, 'parents-components']];
    try {
      for (const [component, name] of elements) {
        const elem = createCustomElement(component, { injector: this.injector });
        customElements.define(name, elem);
      }
    } catch (error) {
      console.error('ANGULAR ERROR', error);
    }
  }
}
