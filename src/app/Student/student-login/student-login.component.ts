import { StudentService } from './../Api/student.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {

  StudentloginForm!:FormGroup
  student:any

  constructor(private Routes:Router,private fb:FormBuilder,private StudApi:StudentService){}
  ngOnInit() {
    this.StudentloginForm = this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(3)]]
    })

  }
  Login(){
    let UserName = this.StudentloginForm.get('username')?.value
    let Password = this.StudentloginForm.get('pwd')?.value

    this.StudApi.Login(UserName,Password).subscribe((res:any)=>{
      this.student = res;
      console.log("check",this.student);
      if(this.student){
        localStorage.setItem('student', JSON.stringify(res))
        this.Routes.navigate(['/Student-Home'])
      }else{
        alert('Wrong Credentials')
      }
    })
  }

}
