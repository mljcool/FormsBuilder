import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {

   }

   getAPIPlaceholder() {
    return this._http.get<any>('http://localhost:3000/view/core/CustomFormModule/CustomFormDefinition/c52b46f3-8b53-44cf-a023-af1000733006/CustomFormDefinitionProfile');
  }
}
