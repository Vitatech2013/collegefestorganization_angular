import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { OrgLoginComponent } from './Organizer/org-login/org-login.component';
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { StudentRegComponent } from './Student/student-reg/student-reg.component';
import { AboutComponent } from './About/about/about.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OrgHomeComponent } from './Organizer/org-home/org-home.component';
import { AddOrgComponent } from './Admin/Organizers/Add-Org/add-org/add-org.component';
import { ViewOrgComponent } from './Admin/Organizers/view-org/view-org.component';
import { AddFestComponent } from './Admin/Fest/add-fest/add-fest.component';
import { ViewFestComponent } from './Admin/Fest/view-fest/view-fest.component';
import { AddCollegeComponent } from './Admin/colleges/add-college/add-college.component';
import { ViewCollegeComponent } from './Admin/colleges/view-college/view-college.component';
import { EventsComponent } from './Admin/Events/events/events.component';
import { ChangePwdComponent } from './Admin/change-pwd/change-pwd.component';
import { EditOrgComponent } from './Admin/Organizers/edit-org/edit-org.component';
import { EditFestComponent } from './Admin/Fest/edit-fest/edit-fest.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { StdChngPwdComponent } from './Student/std-chng-pwd/std-chng-pwd.component';
import { StdProfileComponent } from './Student/std-profile/std-profile.component';
import { StdViewFestComponent } from './Student/std-view-fest/std-view-fest.component';
import { StdViewEventsComponent } from './Student/std-view-events/std-view-events.component';
import { StdViewCollegeComponent } from './Student/std-view-college/std-view-college.component';







@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    OrgLoginComponent,
    StudentLoginComponent,
    StudentRegComponent,
    AboutComponent,
    AdminHomeComponent,
    OrgHomeComponent,
    AddOrgComponent,
    ViewOrgComponent,
    AddFestComponent,
    ViewFestComponent,
    AddCollegeComponent,
    ViewCollegeComponent,
    EventsComponent,
    ChangePwdComponent,
    EditOrgComponent,
    EditFestComponent,
    StudentHomeComponent,
    StdChngPwdComponent,
    StdProfileComponent,
    StdViewFestComponent,
    StdViewEventsComponent,
    StdViewCollegeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
