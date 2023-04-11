import { AdminService } from './../../../Admin/Api/admin.service';
import { StudentService } from './../../../Student/Api/student.service';
import { OrganizerService } from './../../Api/organizer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss']
})
export class EditEventsComponent implements OnInit{

  EditForm!:FormGroup

  Eventdata: any;
  festName: any;
  stdName:any;
  url:any
  Org: any;

  constructor(private Routes:Router,
              private Api:OrganizerService,
              private fb:FormBuilder,
              private StdApi:StudentService,
              private AdminApi:AdminService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditEventsComponent>){

  }

  ngOnInit(): void {
    this.EditForm = this.fb.group({
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
    this.stdName = res;      
    });
    this.AdminApi.ViewEvents().subscribe((res:any)=>{
      this.festName = res;
    });
    this.Api.ViewOrg().subscribe((res:any)=>{
      this.Org = res;  
    });
    console.log(this.data,"Data");
    
    this.EditForm.patchValue({
      festname:this.data.festname,
      eventname:this.data.eventname,
      date:this.data.date,
      time:this.data.time,
      coordinater1:this.data.coordinater1,
      coordinater2:this.data.coordinater2,
      coordinater3:this.data.coordinater3,
      valenteer1:this.data.valenteer1,
      valenteer2:this.data.valenteer2,
      valenteer3:this.data.valenteer3,
      file:this.data.file,
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

  Edit(){
    const e ={
      festname:this.EditForm.get('festname')?.value,
      eventname:this.EditForm.get('eventname')?.value,
      date:this.EditForm.get('date')?.value,
      time:this.EditForm.get('time')?.value,
      coordinater1:this.EditForm.get('coordinater1')?.value,
      coordinater2:this.EditForm.get('coordinater2')?.value,
      coordinater3:this.EditForm.get('coordinater3')?.value,
      valenteer1:this.EditForm.get('valenteer1')?.value,
      valenteer2:this.EditForm.get('valenteer2')?.value,
      valenteer3:this.EditForm.get('valenteer3')?.value,
      file:this.EditForm.get('file')?.value,
    }
    this.Api.EditEvents(this.data._id,e).subscribe((res:any)=>{
      console.log(res,"check");
      alert("Update successfully")
      window.location.reload()
      this.dialogRef.close()
    },err=>{
      alert("Not Updated")
    })

  }

}
