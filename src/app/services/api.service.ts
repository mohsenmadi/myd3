import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  getEmployees() {
    return this.http
      // .get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .get<any>('assets/employees.json')
      .pipe(
        map(payload => payload.data)
      )
  }

}
