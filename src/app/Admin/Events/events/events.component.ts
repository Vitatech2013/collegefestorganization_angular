import { Router } from '@angular/router';
import { AdminService } from './../../Api/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  ViewEvents:any;

  constructor(private Routes:Router,private Api:AdminService){}

  ngOnInit(): void {
    this.Api.ViewEvents().subscribe((res:any)=>{
      this.ViewEvents = res;
      console.log(res);
      
    })
  }

}
