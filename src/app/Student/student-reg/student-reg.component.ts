import { StudentService } from './../Api/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.scss']
})
export class StudentRegComponent implements OnInit{
  StudentRegForm!:FormGroup

  constructor(private fb:FormBuilder,private Routes:Router,private StdApi:StudentService){

  }
  ngOnInit(): void {
    this.StudentRegForm = this.fb.group({
      hallticketno:['',[Validators.required]],
      username:['',[Validators.required]],
      pwd:['',[Validators.required]],
      studentname:['',[Validators.required]],
      college:['',[Validators.required]],
      branch:['',[Validators.required]],
      contactno:['',[Validators.required]],
      email:['',[Validators.required]],
    });

  }

  Register(){
    if(this.StudentRegForm.valid){
      const D = {
        hallticketno:this.StudentRegForm.get('hallticketno')?.value,
        username:this.StudentRegForm.get('username')?.value,
        pwd:this.StudentRegForm.get('pwd')?.value,
        studentname:this.StudentRegForm.get('studentname')?.value,
        college:this.StudentRegForm.get('college')?.value,
        branch:this.StudentRegForm.get('branch')?.value,
        contactno:this.StudentRegForm.get('contactno')?.value,
        email:this.StudentRegForm.get('email')?.value,        
      }
      this.StdApi.Register(D).subscribe((res:any)=>{
        console.log(res,"check");
        alert("Student Registered Successfully")
        this.Routes.navigate(['/Home/stdRegister'])
      })
    }

  }

}
