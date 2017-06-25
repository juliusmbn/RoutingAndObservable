import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Observable }     from 'rxjs/Observable';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
   providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this._employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

}
