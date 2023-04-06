import { StudentRegComponent } from './Student/student-reg/student-reg.component';
import { StdViewCollegeComponent } from './Student/std-view-college/std-view-college.component';
import { StdViewFestComponent } from './Student/std-view-fest/std-view-fest.component';
import { StdViewEventsComponent } from './Student/std-view-events/std-view-events.component';
import { StdChngPwdComponent } from './Student/std-chng-pwd/std-chng-pwd.component';
import { StdProfileComponent } from './Student/std-profile/std-profile.component';
import { StudentHomeComponent } from './Student/student-home/student-home.component';
import { ChangePwdComponent } from './Admin/change-pwd/change-pwd.component';
import { EventsComponent } from './Admin/Events/events/events.component';
import { ViewCollegeComponent } from './Admin/colleges/view-college/view-college.component';
import { AddCollegeComponent } from './Admin/colleges/add-college/add-college.component';
import { ViewFestComponent } from './Admin/Fest/view-fest/view-fest.component';
import { AddFestComponent } from './Admin/Fest/add-fest/add-fest.component';
import { ViewOrgComponent } from './Admin/Organizers/view-org/view-org.component';

import { AddOrgComponent } from './Admin/Organizers/Add-Org/add-org/add-org.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AboutComponent } from './About/about/about.component';
import { OrgLoginComponent } from './Organizer/org-login/org-login.component';
import { StudentLoginComponent } from './Student/student-login/student-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent,children:[
    {path:'About',component:AboutComponent},
    {path:'Admin-login',component:AdminLoginComponent},
    {path:'Organization-login',component:OrgLoginComponent},
    {path:'Student-login',component:StudentLoginComponent},
    {path:'stdRegister',component:StudentRegComponent}
  ]},
  {path:'Admin-Home',component:AdminHomeComponent,children:[
    {path:'Add-Org',component:AddOrgComponent},
    {path:'View-Org',component:ViewOrgComponent},
    {path:'Add-Fest',component:AddFestComponent},
    {path:'View-Fest',component:ViewFestComponent},
    {path:'Add-College',component:AddCollegeComponent},
    {path:'View-College',component:ViewCollegeComponent},
    {path:'Events',component:EventsComponent},
    {path:'Changepwd',component:ChangePwdComponent}
  ]},
  {path:'Student-Home',component:StudentHomeComponent,children:[
    {path:'profile',component:StdProfileComponent},
    {path:'Stdchngpwd',component:StdChngPwdComponent},
    {path:'StdView-Events',component:StdViewEventsComponent},
    {path:'StdView-Fest',component:StdViewFestComponent},
    {path:'StdView-College',component:StdViewCollegeComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
