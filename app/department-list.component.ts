import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './department-list.component.html',
})
export class DepartmentComponent {
  constructor(private router:Router){}
  departments=
  [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]

  onSelect(department)
  {
    this.router.navigate(['/departments',department.id]);
  }
}
