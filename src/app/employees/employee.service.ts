import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from './employee';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Employees } from './employee-mock';
@Injectable()
export class EmployeeService {

  constructor(private _http: Http) { }

  getEmployees(): Observable<Employee[]>{    
      return this._http.get('http://localhost:64914/api/values').map((response:Response) => <Employee[]>response.json());
  }

}
