import { StudentService } from './../Api/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.scss']
})
export class StdProfileComponent implements OnInit {
  UpdateProfile!:FormGroup;
  Profile: any;

  constructor(private Routes:Router,private fb:FormBuilder,
              private Api:StudentService,
              ){}

  ngOnInit(): void {
    let stdName= JSON.parse(localStorage.getItem('student')!).studentname

    this.UpdateProfile = this.fb.group({
      hallticketno:['',[Validators.required]],
      username:['',[Validators.required]],
      pwd:['',[Validators.required]],
      studentname:['',[Validators.required]],
      college:['',[Validators.required]],
      branch:['',[Validators.required]],
      contactno:['',[Validators.required]],
      email:['',[Validators.required]],
    })
    this.Api.ViewProfile(stdName).subscribe((res:any)=>{
      this.Profile = res;
      console.log(this.Profile._id,"profile");
      
      this.UpdateProfile.patchValue({
        hallticketno:this.Profile.hallticketno,
        username:this.Profile.username,
        pwd:this.Profile.pwd,
        studentname:this.Profile.studentname,
        college:this.Profile.college,
        branch:this.Profile.branch,
        contactno:this.Profile.contactno,
        email:this.Profile.email
      }) 
    })

  }
  Update(){
    if(this.UpdateProfile.valid){
    this.Api.EditStd(this.Profile._id,this.UpdateProfile.value).subscribe((res:any)=>{
      alert("Profile Updated Successfully")
    })
  }

  }

}
