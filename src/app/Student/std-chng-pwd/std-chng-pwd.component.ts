import { StudentService } from './../Api/student.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-std-chng-pwd',
  templateUrl: './std-chng-pwd.component.html',
  styleUrls: ['./std-chng-pwd.component.scss']
})
export class StdChngPwdComponent {
  changeForm:any;
  dName:any;

  constructor(private fb:FormBuilder,private StdApi:StudentService){}
  ngOnInit(): void {

    this.dName= JSON.parse(localStorage.getItem('student')!)

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      newpassword:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
    });
    this.changeForm.patchValue({
      username: this.dName.username
    })
  }

  change(){
    let Password = this.changeForm.get('pwd')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Password,nPwd,"check values");
    
console.log(this.dName.pwd, Password);
    if(this.dName.pwd == Password){
      let newData = {
        username:this.dName.username,
        pwd:nPwd,

      }
         this.StdApi.ChngPwd(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Password was Updated Successfully')
       })
    }else{
      alert('Password & new Password not matched')
    }
  }

}
