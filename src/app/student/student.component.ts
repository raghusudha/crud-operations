import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
  
   
  }
  list = this.studentService.getStudentList();

  deleteStudent(student){
    this.studentService.deleteStudent(student);
  }
  update(student){
    
    this.router.navigate(['./editcustomer/' +student.rollno]);
    
  }

  
}
