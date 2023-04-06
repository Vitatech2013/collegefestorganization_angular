import { AdminService } from './../Api/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.scss']
})
export class ChangePwdComponent implements OnInit{
  changeForm:any;
  dName:any;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){}
  ngOnInit(): void {

    this.dName= JSON.parse(localStorage.getItem('admin')!)

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      newpassword:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
    });
    this.changeForm.patchValue({
      username: this.dName.username
    })
  }

  change(){
    let Password = this.changeForm.get('pwd')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Password,nPwd,"check values");
    
console.log(this.dName.pwd, Password);
    if(this.dName.pwd == Password){
      let newData = {
        username:this.dName.username,
        pwd:nPwd,

      }
         this.Api.ChngPwd(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Password was Updated Successfully')
       })
    }else{
      alert('Password & new Password not matched')
    }
  }


  }


