import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http:HttpClient) { }

  getOrg(email:any,contactno:any){
    return this.http.get('http://localhost:5000/Organizer/show?email=' + email + '&contactno=' +contactno)
  }
  ViewOrg(){
    return this.http.get('http://localhost:5000/Organizer/vieworganizers')
  }
  AddEvents(data:any){
    return this.http.post('http://localhost:5000/Organizer/events', data)
  }
  ViewEvents(){
    return this.http.get('http://localhost:5000/Organizer/viewevents')
  }
  EditEvents(id:any,data:any){
    return this.http.put('http://localhost:5000/Organizer/updateevents/' + id,data)   
  }
  DeleteEvents(id:any){
    return this.http.delete('http://localhost:5000/Organizer/deleteFest/' + id)
  }
  ViewFest(){
    return this.http.get('http://localhost:5000/Organizer/viewfest')
  }
  ChgMobileno(id:any,data:any){
    return this.http.put('http://localhost:5000/Organizer/updatemobileno/' +id ,data)
  }
}
