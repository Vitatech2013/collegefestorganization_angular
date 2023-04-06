import { EditOrgComponent } from './../edit-org/edit-org.component';
import { Router } from '@angular/router';
import { AdminService } from './../../Api/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.scss']
})
export class ViewOrgComponent implements OnInit{

  ViewOrganization:any;

  constructor(private Routes:Router,private Api:AdminService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewOrg().subscribe((res:any)=>{
      this.ViewOrganization = res
      console.log(res,"check");
      
    })
  }
  edit(e:any){
    this.dialog.open(EditOrgComponent,{
      width:"40%",
      height:"95%",
      data:e
    })
  }
  Delete(d:any){
    this.Api.DeleteOrg(d._id).subscribe((res:any)=>{
      window.location.reload()
    })
  }
}
