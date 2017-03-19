import { Component, OnInit } from '@angular/core';

import { Achievement } from '../../achievements/achievement'
import { Leader } from '../leader';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-leader-details',
  templateUrl: './leader-details.component.html',
  styleUrls: ['./leader-details.component.css']
})
export class LeaderDetailsComponent implements OnInit {

  achievements: Achievement[] = []
  constructor(private dataService: DataService) { }
    
  ngOnInit() {
    this.achievements = this.dataService.getAchievements();
  }

}

