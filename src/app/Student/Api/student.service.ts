import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  Login(studentname:any,pwd:any){
    return this.http.get('http://localhost:5000/Student/studentlogin?studentname='+ studentname + '&pwd=' + pwd)
  }
  Register(data:any){
    return this.http.post('http://localhost:5000/Student/studentregistrations',data)
  }
  ViewProfile(studentname:any){
    return this.http.get('http://localhost:5000/Student/viewprofile?studentname='+ studentname)
  }
  EditStd(id:any,data:any){
    return this.http.put('http://localhost:5000/Student/up/' + id,data)
  }
  ViewStd(){
    return this.http.get('http://localhost:5000/Student/viewstudent')   
  }
  ViewFest(){
    return this.http.get('http://localhost:5000/Student/viewfest')
  }
  ViewEvents(){
    return this.http.get('http://localhost:5000/Student/viewevents')
  }
  ViewColleges(){
    return this.http.get('http://localhost:5000/Student/viewothercolleges')
  }
  ChngPwd(id:any,data:any){
    return this.http.put('http://localhost:5000/Student/updatepassword/' +id ,data)
  }
}
