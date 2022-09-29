
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[] =[];


  constructor(private employeeService:EmployeeService, private router: Router,) { }

  ngOnInit(): void {
   
    this.employeeList = this.employeeService.getEmployees();
  }
 
 
remove(id: number) {
  this. employeeService.removeUser(id);
  this.employeeList = this.employeeService.getEmployees();
}


}
