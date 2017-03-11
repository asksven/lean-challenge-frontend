import { Component, OnInit, Input } from '@angular/core';

import { Achievement } from '../../achievement'

@Component({
  selector: 'lc-achievements-item',
  templateUrl: './achievements-item.component.html',
  styleUrls: ['./achievements-item.component.css']
})
export class AchievementsItemComponent implements OnInit {

  @Input() achievement: Achievement;
  achievementId: number;
  constructor() { }

  ngOnInit() {
  }

}
