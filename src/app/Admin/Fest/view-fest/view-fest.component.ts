import { EditFestComponent } from './../edit-fest/edit-fest.component';
import { Router } from '@angular/router';
import { AdminService } from './../../Api/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-fest',
  templateUrl: './view-fest.component.html',
  styleUrls: ['./view-fest.component.scss']
})
export class ViewFestComponent implements OnInit{
  ViewFest:any;

  constructor(private Routes:Router,private Api:AdminService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewFest().subscribe((res:any)=>{
      console.log(res,"check");
      this.ViewFest = res;      
    })
  }
  edit(e:any){
    this.dialog.open(EditFestComponent,{
      width:"45%",
      height:"87%",
      data:e
    })
  }
  Delete(d:any){
    this.Api.DeleteFest(d._id).subscribe((res:any)=>{
      window.location.reload()
    })
  }

}
