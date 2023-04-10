import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { OrganizerService } from '../Api/organizer.service';

@Component({
  selector: 'app-change-mobileno',
  templateUrl: './change-mobileno.component.html',
  styleUrls: ['./change-mobileno.component.scss']
})
export class ChangeMobilenoComponent {
  changeForm:any;
  dName:any;

  constructor(private fb:FormBuilder,private Api:OrganizerService){}
  ngOnInit(): void {

    this.dName= JSON.parse(localStorage.getItem('organizer')!)

    this.changeForm = this.fb.group({
      email:['',[Validators.required]],
      contactno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      newcontactno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    });
    this.changeForm.patchValue({
      email: this.dName.email
    })
  }

  change(){
    let Mobileno = this.changeForm.get('contactno')?.value
    let newMobileno = this.changeForm.get('newcontactno')?.value

    console.log(Mobileno,newMobileno,"check values");
    
console.log(this.dName.contactno, Mobileno);
    if(this.dName.contactno == Mobileno){
      let newData = {
        email:this.dName.email,
        contactno:newMobileno,

      }
         this.Api.ChgMobileno(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Mobileno was Updated Successfully')
       })
    }else{
      alert('mobileno & new mobileno not matched')
    }
  }


}
