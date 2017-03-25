import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Achievement } from '../achievement'

@Component({
  selector: 'lc-achievements-item',
  templateUrl: './achievements-item.component.html',
  styleUrls: ['./achievements-item.component.css']
})
export class AchievementsItemComponent implements OnInit {

  @Input() achievement: Achievement;
  achievementId: number;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    console.log('selected achievement ' + this.achievement['id']);
    this.router.navigate(['achievement', this.achievement['id']]);
  }

}
