import { Component, OnInit } from '@angular/core';
import { Achievement } from './achievement';
@Component({
  selector: 'lc-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] = [
    new Achievement('Team CCT', 'Optimized Azure Group FW Process', "The process was optimized in order to avoid generating deltas", 50),
    new Achievement('Team CCT', 'Optimized laptop provisioning for devs', "The process was optimized in order to avoid projects to requests VM-Ware using their own charge code", 20)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
