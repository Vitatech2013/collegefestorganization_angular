import { DeleteEventsComponent } from './../delete-events/delete-events.component';
import { EditEventsComponent } from './../edit-events/edit-events.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrganizerService } from './../../Api/organizer.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {
  ViewEvents: any

  constructor(private Routes: Router, private Api: OrganizerService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.Api.ViewEvents().subscribe((res: any) => {
      console.log(res, "check");
      this.ViewEvents = res;
    })

  }
  edit() {
    this.dialog.open(EditEventsComponent, {
      width: "45%",
      // data:e
    })

  }
  Delete() {
    this.dialog.open(DeleteEventsComponent, {
      width: '25%',
      // data:d

    })
  }
}
