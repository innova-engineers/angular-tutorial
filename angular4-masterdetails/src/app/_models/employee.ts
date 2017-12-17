import {Department} from "./department";
export class Employee {
  id: string;
  name: string;
  dept: Department;

  constructor(id: string,
              name: string,
  dept: Department) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }
}
