import { AdminService } from './../../../Admin/Api/admin.service';
import { StudentService } from './../../../Student/Api/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizerService } from './../../Api/organizer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit{

  AddForm!:FormGroup

  Eventdata: any;
  festName: any;
  stdName:any;
  url:any
  Org: any;

  constructor(private Routes:Router,
              private Api:OrganizerService,
              private fb:FormBuilder,
              private StdApi:StudentService,
              private AdminApi:AdminService){

  }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      festname:['',[Validators.required]],
      eventname:['',[Validators.required]],
      date:['',[Validators.required]],
      time:['',[Validators.required]],
      coordinater1:['',[Validators.required]],
      coordinater2:['',[Validators.required]],
      coordinater3:['',[Validators.required]],
      valenteer1:['',[Validators.required]],
      valenteer2:['',[Validators.required]],
      valenteer3:['',[Validators.required]],
      file:['',[Validators.required]],
      

    })
    this.StdApi.ViewStd().subscribe((res:any)=>{
      console.log(res,"check");
    this.stdName = res;      
    });
    this.AdminApi.ViewEvents().subscribe((res:any)=>{
      console.log(res,"admin");
      this.festName = res;
    });
    this.Api.ViewOrg().subscribe((res:any)=>{
      console.log(res,"org");
      this.Org = res;  
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
Add(){
  const E ={
    festname:this.AddForm.get('festname')?.value,
    eventname:this.AddForm.get('eventname')?.value,
    date:this.AddForm.get('date')?.value,
    time:this.AddForm.get('time')?.value,
    coordinater1:this.AddForm.get('coordinater1')?.value,
    coordinater2:this.AddForm.get('coordinater2')?.value,
    coordinater3:this.AddForm.get('coordinater3')?.value,
    valenteer1:this.AddForm.get('valenteer1')?.value,
    valenteer2:this.AddForm.get('valenteer2')?.value,
    valenteer3:this.AddForm.get('valenteer3')?.value,
    file:this.url
  }
  if(this.AddForm.valid){
    this.Api.AddEvents(E).subscribe((res:any)=>{
      alert("Events Added Successfully")
    })
  }
}
}
