import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Achievement } from '../achievement';
import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievements-item',
  templateUrl: './achievements-item.component.html',
  styleUrls: ['./achievements-item.component.css']
})
export class AchievementsItemComponent implements OnInit {

  @Input() achievement: Achievement;
  @Input() achievementId: number;
 
  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
  }

 onEdit() {
    console.log('selected achievement ' + this.achievement['id']);
    this.router.navigate(['achievements', this.achievement['id'], 'edit']);
  }

  onDelete() {
    console.log('deleting achievement ' + this.achievement['id']);
    this.dataService.deleteAchievement(this.achievement['id']);
  }


}
