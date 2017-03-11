import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lc-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  saving: number = 535;
  improvements: number = 30;
  quality_improvements: number = 25;


  constructor() { }

  ngOnInit() {
  }

}
