import { StudentService } from './../Api/student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-std-view-college',
  templateUrl: './std-view-college.component.html',
  styleUrls: ['./std-view-college.component.scss']
})
export class StdViewCollegeComponent {
  viewCollege:any

  constructor(private StdApi:StudentService){}

  ngOnInit(): void {
    this.StdApi.ViewColleges().subscribe((res:any)=>{
      this.viewCollege = res;
      console.log(res,"check");
      
    })
  }

}
