import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

import { Achievement } from '../achievement';
import { ComponentCanDeactivate } from './achievement-edit.guard';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievement-edit',
  templateUrl: './achievement-edit.component.html',
  styleUrls: ['./achievement-edit.component.css']
})
export class AchievementEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  achievement: Achievement = {
    'id': 0,
    'team': '',
    'title': '',
    'description': '',
    'saving': 0
  };

  private id: number;
  mode: string = "Edit";

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
    // we can only load a component if we received an id. If not then we are in "add" mode
    if (this.id) {
      this.achievement = this.dataService.getAchievement(this.id);
    } else {
      this.mode = "Add";
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log("Form submitted with action " + this.mode);
    console.log(this.achievement);
    // finish-up and navigate away
    if (this.mode === "Edit") {
      this.dataService.saveAchievement(this.achievement.id, this.achievement.team, this.achievement.title, this.achievement.description, this.achievement.saving);
    } else {
      this.dataService.addAchievement(this.achievement);
    }
    this.router.navigate(['/achievements']); 
  }

}
