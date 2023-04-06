import { AdminService } from './../../Api/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-fest',
  templateUrl: './edit-fest.component.html',
  styleUrls: ['./edit-fest.component.scss']
})
export class EditFestComponent implements OnInit {

  EditFestForm!:FormGroup
  url:any;
  OrgList: any;

  constructor(private Routes:Router,private Api:AdminService,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditFestComponent>){}

  ngOnInit(): void {
    this.EditFestForm = this.fb.group({
      festname:['',[Validators.required]],
      startfrom:['',[Validators.required]],
      end:['',[Validators.required]],
      description:['',[Validators.required]],
      username:['',[Validators.required]],
      file:['',[Validators.required]]
    })

    this.Api.ViewOrg().subscribe((res:any)=>{
      this.OrgList = res;
      
    })
    this.EditFestForm.patchValue({
      festname:this.data.festname,
      startfrom:this.data.startfrom,
      end:this.data.end,
      description:this.data.description,
      username:this.data.username,
      file:this.data.file,
    })
    console.log(this.data.file,"check");
    
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }
  Edit(){
    const e ={
      festname:this.EditFestForm.get('festname')?.value,
      startfrom:this.EditFestForm.get('startfrom')?.value,
      end:this.EditFestForm.get('end')?.value,
      description:this.EditFestForm.get('description')?.value,
      username:this.EditFestForm.get('username')?.value,
      file:this.EditFestForm.get('file')?.value,
    }
    this.Api.EditFest(this.data._id,e).subscribe((res:any)=>{
      console.log(res,"Check res");
        alert("Update Successfully");
        window.location.reload()
        this.dialogRef.close()
      },err=>{
        alert("ERROR")
      })
  }

}
