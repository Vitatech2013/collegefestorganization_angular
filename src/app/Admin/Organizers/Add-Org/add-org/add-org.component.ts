import { AdminService } from './../../../Api/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.scss']
})
export class AddOrgComponent implements OnInit {

  addForm! : FormGroup;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){

  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name:['',[Validators.required]],
      username:['',[Validators.required]],
      designation:['',[Validators.required]],
      branch:['',[Validators.required]],
      email:['',[Validators.required]],
      contactno:['',[Validators.required]],
      selectname:['',[Validators.required]]
    })
   
  }

  Register(){

    const O = {
      name:this.addForm.get('name')?.value,
      username:this.addForm.get('username')?.value,
      designation:this.addForm.get('designation')?.value,
      branch:this.addForm.get('branch')?.value,
      email:this.addForm.get('email')?.value,
      contactno:this.addForm.get('contactno')?.value,
      selectname:this.addForm.get('selectname')?.value,
    }

    if(this.addForm.valid){
      this.Api.AddOrg(O).subscribe((res:any)=>{
        console.log(res,"check");
        alert("Organization Added Successfully")
        this.Routes.navigate(['/Admin-Home/View-Org'])
      })
    }
  }
}
