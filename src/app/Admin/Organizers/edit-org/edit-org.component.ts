import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../../Api/admin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.scss']
})
export class EditOrgComponent implements OnInit{

  EditForm!:FormGroup;
  constructor(private Routes:Router,private fb:FormBuilder,
              private Api:AdminService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditOrgComponent>,){

  }


  ngOnInit(): void {
    this.EditForm = this.fb.group({
      name:['',[Validators.required]],
      username:['',[Validators.required]],
      designation:['',[Validators.required]],
      branch:['',[Validators.required]],
      email:['',[Validators.required]],
      contactno:['',[Validators.required]],
      selectname:['',[Validators.required]]
    })
    this.EditForm.patchValue({
      name:this.data.name,
      username:this.data.username,
      designation:this.data.designation,
      branch:this.data.branch,
      email:this.data.email,
      contactno:this.data.contactno,
      selectname:this.data.selectname,
    })
  }
  Edit(){
    const e ={
      name:this.EditForm.get('name')?.value,
      username:this.EditForm.get('username')?.value,
      designation:this.EditForm.get('designation')?.value,
      branch:this.EditForm.get('branch')?.value,
      email:this.EditForm.get('email')?.value,
      contactno:this.EditForm.get('contactno')?.value,
      selectname:this.EditForm.get('selectname')?.value,
    }
    this.Api.EditOrg(this.data._id,e).subscribe((res:any)=>{
      console.log(res,"Check res");
        alert("Update Successfully");
        window.location.reload()
        this.dialogRef.close()
      },err=>{
        alert("ERROR")
      })
  }

}
