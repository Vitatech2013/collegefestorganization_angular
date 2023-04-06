import { Router } from '@angular/router';
import { AdminService } from './../../Api/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-college',
  templateUrl: './view-college.component.html',
  styleUrls: ['./view-college.component.scss']
})
export class ViewCollegeComponent implements OnInit{

  viewCollege:any

  constructor(private Routes:Router,private Api:AdminService){}

  ngOnInit(): void {
    this.Api.ViewCollege().subscribe((res:any)=>{
      this.viewCollege = res;
      console.log(res,"check");
      
    })
  }
  Delete(d:any){
    this.Api.DeleteCollege(d._id).subscribe((res:any)=>{
      console.log(res);
      window.location.reload()
    })
  }

}
