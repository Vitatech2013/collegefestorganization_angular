import { Component } from '@angular/core';
import { OrganizerService } from '../Api/organizer.service';

@Component({
  selector: 'app-fst-details',
  templateUrl: './fst-details.component.html',
  styleUrls: ['./fst-details.component.scss']
})
export class FstDetailsComponent {
  ViewFest:any;

  constructor(private Api:OrganizerService){}

  ngOnInit(): void {
    this.Api.ViewFest().subscribe((res:any)=>{
      console.log(res,"check");
      this.ViewFest = res;      
    })
  }

}
