import { Component, OnInit } from '@angular/core';
import {Employee} from "../_models/employee";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Department} from "../_models/department";
import {depth} from "array-flatten";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emps: Employee[];
  selectedEmp: Employee;

  constructor() {
  }

  ngOnInit() {
    let dept1 = new Department("001", "HR");
    let dept2 = new Department("002", "Accounts");

    this.emps = [
      new Employee("31701", "Andrew", dept1),
      new Employee("31702", "Johny", dept1),
      new Employee("31703", "Steve", dept2),
      new Employee("31704", "Maria", dept2),
      new Employee("31705", "Tracy", dept2)
    ]
  }

  onSelectEmployee(emp: Employee) {
    this.selectedEmp = emp;
  }
}
