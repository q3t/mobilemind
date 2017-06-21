import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from "angularfire2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if(auth){
        router.navigate(['create']);
      }else {
      }
    });
   }

  ngOnInit() {
  }

  login(form){
    this.af.auth.login({
      email: form.value.email,
      password: form.value.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
    form.reset();
  }

  signup(form){
    this.af.auth.createUser({
      email: form.value.email,
      password: form.value.password
    });
    form.reset();
  }

}