import { AdminService } from './../Api/admin.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent{
  adminloginForm!:FormGroup
  admin:any

  constructor(private Routes:Router,private fb:FormBuilder,private Adminapi:AdminService){}
  ngOnInit() {
    this.adminloginForm = this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(3)]]
    })

  }
  Login(){
    let UserName = this.adminloginForm.get('username')?.value
    let Password = this.adminloginForm.get('pwd')?.value

    this.Adminapi.getAdmin(UserName,Password).subscribe((res:any)=>{
      this.admin = res;
      console.log("check",this.admin);
      if(this.admin){
        localStorage.setItem('admin', JSON.stringify(res))
        this.Routes.navigate(['/Admin-Home'])
      }else{
        alert('Wrong Credentials')
      }
    })
  }
}
