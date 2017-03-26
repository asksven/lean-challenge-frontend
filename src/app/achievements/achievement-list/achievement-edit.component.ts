import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { Achievement } from '../achievement';
import { ComponentCanDeactivate } from './achievement-edit.guard';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievement-edit',
  templateUrl: './achievement-edit.component.html',
  styleUrls: ['./achievement-edit.component.css']
})
export class AchievementEditComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  private subscription: Subscription;

  private id: number;
  private done: boolean = false;
  
  achievement: Achievement;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
    this.achievement = this.dataService.getAchievement(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSaveAchievement(team: string, title: string, description: string, saving: number) {
    // finish-up and navigate away
    this.dataService.saveAchievement(this.id, team, title, description, +saving);
    this.done = true;
    this.router.navigate(['/achievements']); 
  }

  onCancel() {
    // navigate away
    this.done = true;
    this.router.navigate(['/achievements']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    console.log("can deactivate called, done is " + this.done);
    return this.done;
  }

}
