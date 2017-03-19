import { Component, OnInit } from '@angular/core';
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
  
  constructor(private logService: LogService, private dataService: DataService) { }

  ngOnInit() {
    this.logService.writeToLog('achivements component was initialized');
    this.achievements = this.dataService.getAchievements();
  }

}
