import { AdminService } from './../../Api/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.scss']
})
export class AddCollegeComponent implements OnInit  {

  addCollegeForm!:FormGroup
  url:any

  constructor(private fb:FormBuilder,private Routes:Router,private Api:AdminService){}

  ngOnInit(): void {
    this.addCollegeForm = this.fb.group({
      festname:['',[Validators.required]],
      college:['',[Validators.required]],
      startsfrom:['',[Validators.required]],
      endon:['',[Validators.required]],
      contactno:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      website:['',[Validators.required]],
      file:['',[Validators.required]],

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
    if(this.addCollegeForm.valid){
    const C = {
      festname:this.addCollegeForm.get('festname')?.value,
      college:this.addCollegeForm.get('college')?.value,
      startsfrom:this.addCollegeForm.get('startsfrom')?.value,
      endon:this.addCollegeForm.get('endon')?.value,
      contactno:this.addCollegeForm.get('contactno')?.value,
      email:this.addCollegeForm.get('email')?.value,
      website:this.addCollegeForm.get('website')?.value,
      file:this.url
    }
    this.Api.AddCollege(C).subscribe((res:any)=>{
      console.log(res,"check");
      alert("College Added Successfully")
      this.Routes.navigate(['/Admin-Home/View-College'])
      
    })
  }
  }

}
