import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lc-achievements-summary',
  templateUrl: './achievements-summary.component.html',
  styleUrls: ['./achievements-summary.component.css']
})
export class AchievementsSummaryComponent implements OnInit {

  saving: number = 535;
  improvements: number = 30;
  quality_improvements: number = 25;


  constructor() { }

  ngOnInit() {
  }

}
