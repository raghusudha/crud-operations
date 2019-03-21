import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  list:any=[];
  constructor(private studentService:StudentService,private router: Router,private route: ActivatedRoute) { }
  id:any;
  private sub: any;
  student:any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['rollno']; // (+) converts string 'id' to a number
      console.log("rollno is "+this.id);
      this.student = this.studentService.getStudentById(this.id);
     //  console.log(JSON.stringify(this.customer));
      // In a real app: dispatch action to load the details here.
   });
  }
  
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['./student/']);
    
  

}
}
