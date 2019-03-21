import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  students:any=[{rollno:1,dob:'1/1/2019',firstname:'Sudha',lastname:'Botlagunta',parentname:'venkatrao',parentphone:34567890,address:'btm'},
  {rollno:2,dob:'1/1/2019',firstname:'pavi',lastname:'Botlagunta',parentname:'venkatrao',parentphone:765432,address:'btm'},
  {rollno:3,dob:'1/1/2019',firstname:'ammu',lastname:'Botlagunta',parentname:'venkatrao',parentphone:765432,address:'btm'},
  {rollno:4,dob:'1/1/2019',firstname:'balu',lastname:'Botlagunta',parentname:'venkatrao',parentphone:765432,address:'btm'},
  {rollno:5,dob:'1/1/2019',firstname:'chintu',lastname:'Botlagunta',parentname:'venkatrao',parentphone:765432,address:'btm'}]



  getStudentList(){
     if(localStorage.getItem('students').length!=null){
       this.students=JSON.parse(localStorage.getItem('students'));
     }
    return this.students;
  } 
  
  addStudent(student){
    student.rollno=Math.round(Math.random()*10000);
    this.students.push(student);
     localStorage.setItem('students',JSON.stringify(this.students));
   }
   deleteAllStudent(){
    this.students.length=0;
     localStorage.setItem('students',JSON.stringify(this.students));
  }
  deleteStudent(student){

    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno==student.rollno){
        this.students.splice(i,1);
      }
    }
    localStorage.setItem('students',JSON.stringify(this.students));
  
  }
  updateStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno==student.rollno){
        this.students[i]=student;
        localStorage.setItem('students', JSON.stringify(this.students));
      }
      
    }
    
   }
   getStudentById(rollno){
    console.log(rollno);
    for(var i=0;i<this.students.length;i++){
      console.log(this.students[i]);
   if(this.students[i].rollno==rollno){
     return this.students[i];
    
     break;
     }
    }
   
  }
}