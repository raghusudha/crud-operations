import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  student:any={};

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
  }
  addStudent(student){
    this.studentService.addStudent(student);
    this.router.navigate(['./student/' ]);

}
updateStudent(student){
  this.studentService.updateStudent(student);
  this.router.navigate(['./student/']);
  


}
}
