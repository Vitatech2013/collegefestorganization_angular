import { AdminService } from './../../Api/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-fest',
  templateUrl: './add-fest.component.html',
  styleUrls: ['./add-fest.component.scss']
})
export class AddFestComponent implements OnInit  {
  addFestForm!:FormGroup
  OrgList: any;

  constructor(private fb:FormBuilder,private Routes:Router,private Api:AdminService){

  }
  url:any

  ngOnInit(): void {
    this.addFestForm = this.fb.group({
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

  ADD(){
    const F = {
      festname:this.addFestForm.get('festname')?.value,
      startfrom:this.addFestForm.get('startfrom')?.value,
      end:this.addFestForm.get('end')?.value,
      description:this.addFestForm.get('description')?.value,
      username:this.addFestForm.get('username')?.value,
      file:this.url
    }
if(this.addFestForm.valid){
  this.Api.AddFest(F).subscribe((res:any)=>{
    alert("Fest Added Successfully")
    this.Routes.navigate(['/Admin-Home/View-Fest'])
    
  })
}
  }
}
