import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmin(username:any,pwd:any){
    return this.http.get('http://localhost:5000/admin?username=' + username + '&pwd=' +pwd)
  }
  AddOrg(data:any){
    return this.http.post('http://localhost:5000/admin/organizers', data)
  }
  ViewOrg(){
    return this.http.get('http://localhost:5000/admin/vieworganizers')
  }
  EditOrg(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updateorg/' + id,data)   
  }
  DeleteOrg(id:any){
    return this.http.delete('http://localhost:5000/admin/' + id)
  }
  AddFest(data:any){
    return this.http.post('http://localhost:5000/admin/fests', data)
  }
  ViewFest(){
    return this.http.get('http://localhost:5000/admin/viewfest')
  }
  EditFest(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updatefest/' + id,data)
  }
  DeleteFest(id:any){
    return this.http.delete('http://localhost:5000/admin/deletefest/' + id)
  }
  AddCollege(data:any){
    return this.http.post('http://localhost:5000/admin/othercolleges', data)
  }
  ViewCollege(){
    return this.http.get('http://localhost:5000/admin/viewothercolleges')
  }
  DeleteCollege(id:any){
    return this.http.delete('http://localhost:5000/admin/deleteOthercolleg/'+id)
  }
  ViewEvents(){
    return this.http.get('http://localhost:5000/admin/viewevents')   
  }
  ChngPwd(id:any,data:any){
    return this.http.put('http://localhost:5000/admin/updatepassword/' +id ,data)

  }
}
