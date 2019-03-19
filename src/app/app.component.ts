import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoAngularSPA';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBySWrCK-Z81QEqNlN675PlARATVP-IWt4",
      authDomain: "ng-cars.firebaseapp.com"
    })
  }

}
