import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Achievement } from '../achievement';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievement-add',
  templateUrl: './achievement-add.component.html',
  styleUrls: ['./achievement-add.component.css']
})
export class AchievementAddComponent implements OnInit {

  private id: number;
  @Input() achievement: Achievement;

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  addAchievement(team: string, title: string, description: string, saving: number) {
    console.log("addAchievement was passed " + team);
    this.dataService.addAchievement(new Achievement(0, team, title, description, +saving));
    this.router.navigate(['/achievements']);
  }

  onCancel() {
    // navigate away
    this.router.navigate(['/achievements']);
  }

}
