import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm;
  data;

  constructor(fb:FormBuilder,private router:Router,private profileService:ProfileService) {
    this.profileForm = fb.group({
      "username":["",Validators.required],
      "email":["",Validators.required],
      "mobileNumber":["",Validators.required]
    })
   }

   onProfileSubmit(){
     this.data["username"] = this.profileForm.value.username;
     this.data["email"]=this.profileForm.value.email;
     this.data["mobileNumber"]=this.profileForm.value.mobileNumber;
     this.profileService.updateUser(this.data).subscribe((res)=>{
       this.setProfileData(res);
     })
   }

  ngOnInit() {
    this.profileService.getUserData().subscribe((res)=>{
      this.setProfileData(res);
    });
  }

  setProfileData(res){
    this.profileForm.controls['username'].setValue(res["username"]);
      this.profileForm.controls['email'].setValue(res["email"]);
      this.profileForm.controls['mobileNumber'].setValue(res["mobileNumber"]);
      this.data=res;
      console.log(res);
  }

  onClickSignOut(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);

  }

}
