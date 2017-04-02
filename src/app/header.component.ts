import { Component, OnDestroy } from '@angular/core';

import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'lc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated: boolean = false;
  private subscription: Subscription;
  constructor(private dataService: DataService, private authService: AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onLogOn() {
    this.authService.logOn();
  }

  onLogOff() {
    this.authService.logOff();

  }

  isAuth() {
    return this.isAuthenticated;
  }
  
}
