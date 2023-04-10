import { OrganizerService } from './../Api/organizer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrls: ['./org-login.component.scss']
})
export class OrgLoginComponent implements OnInit{
  OrgLoginForm!:FormGroup;
  constructor(private Routes:Router,private fb:FormBuilder,private Api:OrganizerService){

  }

  ngOnInit(): void {
    this.OrgLoginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      contactno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]]
    })

  }
  Login(){
    let Email = this.OrgLoginForm.get('email')?.value
    let Contactno = this.OrgLoginForm.get('contactno')?.value

    this.Api.getOrg(Email,Contactno).subscribe((res:any)=>{
      console.log(res,"check");
      if(res){
        localStorage.setItem('organizer', JSON.stringify(res))
        this.Routes.navigate(['/Org-Home'])  
      }else{
        alert("WRONG CREDENTIALS")
      }
    })

  }

}
