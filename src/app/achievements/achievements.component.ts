import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from './achievement';
import { LogService } from '../log.service';
import {DataService} from '../data.service'

@Component({
  selector: 'lc-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [];
  
  constructor(private logService: LogService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.logService.writeToLog('achivements component was initialized');
    this.achievements = this.dataService.getAchievements();
    this.dataService.achievementsChanged.subscribe(
      (achievements: Achievement[]) => this.achievements = achievements
    );
  }

}
