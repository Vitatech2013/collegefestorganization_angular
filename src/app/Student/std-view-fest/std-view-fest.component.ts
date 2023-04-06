import { StudentService } from './../Api/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-std-view-fest',
  templateUrl: './std-view-fest.component.html',
  styleUrls: ['./std-view-fest.component.scss']
})
export class StdViewFestComponent {
  ViewFest:any;

  constructor(private StdApi:StudentService){}

  ngOnInit(): void {
    this.StdApi.ViewFest().subscribe((res:any)=>{
      console.log(res,"check");
      this.ViewFest = res;      
    })
  }

}
