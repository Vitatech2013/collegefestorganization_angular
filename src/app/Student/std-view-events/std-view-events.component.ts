import { StudentService } from './../Api/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-std-view-events',
  templateUrl: './std-view-events.component.html',
  styleUrls: ['./std-view-events.component.scss']
})
export class StdViewEventsComponent {
  ViewEvents:any;

  constructor(private StdApi:StudentService){}

  ngOnInit(): void {
    this.StdApi.ViewEvents().subscribe((res:any)=>{
      this.ViewEvents = res;
      console.log(res);
      
    })
  }

}
