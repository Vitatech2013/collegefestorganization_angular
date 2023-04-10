import { OrganizerService } from './../../Api/organizer.service';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-events',
  templateUrl: './delete-events.component.html',
  styleUrls: ['./delete-events.component.scss']
})
export class DeleteEventsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private Api:OrganizerService){
    console.log(data);
    
  }

  deleteEvent(){
    this.Api.DeleteEvents(this.data._id).subscribe((res:any)=>{
      console.log(res,"check");
      window.location.reload()
    })
  }

}
