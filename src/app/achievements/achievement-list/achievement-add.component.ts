import { Component, OnInit, Input } from '@angular/core';

import { Achievement } from '../achievement';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievement-add',
  templateUrl: './achievement-add.component.html',
  styleUrls: ['./achievement-add.component.css']
})
export class AchievementAddComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addAchievement(team: string, title: string, description: string, saving: number) {
    console.log("addAchievement was passed " + team);
    this.dataService.addAchievement(new Achievement(team, title, description, +saving))
  }

}
