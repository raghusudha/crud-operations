import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  list:any=[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }
  deleteAllStudents(){
    this.studentService.deleteAllStudent();
  }
}
