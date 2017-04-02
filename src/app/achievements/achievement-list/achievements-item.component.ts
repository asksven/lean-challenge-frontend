import { AuthService } from './../../auth.service';
import { Component, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Achievement } from '../achievement';
import { DataService } from '../../data.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'lc-achievements-item',
  templateUrl: './achievements-item.component.html',
  styleUrls: ['./achievements-item.component.css']
})
export class AchievementsItemComponent implements OnDestroy {

  @Input() achievement: Achievement;
  @Input() achievementId: number;

  isAuthenticated: boolean = false;
  private subscription: Subscription;

 
  constructor(public router: Router, public dataService: DataService, public authService: AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 onEdit() {
    console.log('selected achievement ' + this.achievement['id']);
    this.router.navigate(['achievements', this.achievement['id'], 'edit']);
  }

  onDelete() {
    console.log('deleting achievement ' + this.achievement['id']);
    this.dataService.deleteAchievement(this.achievement['id']);
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
