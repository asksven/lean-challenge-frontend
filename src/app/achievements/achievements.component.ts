import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from './achievement';
import { LogService } from '../log.service';
import {DataService} from '../data.service'
import { AuthService } from '../auth.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'lc-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
  
  isAuthenticated: boolean = false;
  private subscription: Subscription;

  constructor(private logService: LogService, private dataService: DataService, private authService: AuthService, private router: Router) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );  

  }

  ngOnInit() {
    this.logService.writeToLog('achivements component was initialized');
    this.achievements = this.dataService.getAchievements();
    this.dataService.achievementsChanged.subscribe(
      (achievements: Achievement[]) => this.achievements = achievements
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  isAuth() {
    return this.isAuthenticated;
  }

}
