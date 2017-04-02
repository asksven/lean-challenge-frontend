import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx'; 

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  logOn() {
    console.log("Logging on anonymously");
    firebase.auth().signInAnonymously().catch(function(error) {
      console.log("Error ocuured when logging in: " + error);
    });
  }

  logOff() {
    console.log("Logging out");
    firebase.auth().signOut();
    this.router.navigate(["/"]);
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();

  }
}
