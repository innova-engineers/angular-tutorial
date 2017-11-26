import { Component, OnInit } from '@angular/core';
import {Employee} from "../_models/employee";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emps: Employee[];
  name: string;
  form: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'name' : [null, Validators.required]
    });
  }

  ngOnInit() {
    this.submitted = false;
    this.emps = [
      new Employee("31701", "Andrew"),
      new Employee("31702", "Johny"),
      new Employee("31703", "Steve"),
      new Employee("31704", "Maria"),
      new Employee("31705", "Tracy")
    ]
  }

  onSubmit(){
    this.submitted = true;
    console.log("Clicked");
    if(this.form.valid) {
      this.name = this.name.toUpperCase();
    }
  }
}
