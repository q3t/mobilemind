import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { 
    
    this.blogs = af.database.list('/blogs');
        af.auth.subscribe(auth => {
      if(auth){
        console.log('signed in', auth.auth.email);
      }else{
        console.log('not logged in', auth);
      }
    });
  }

  ngOnInit() {
  }

}