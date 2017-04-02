import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lc-achievements-summary',
  templateUrl: './achievements-summary.component.html',
  styleUrls: ['./achievements-summary.component.css']
})
export class AchievementsSummaryComponent implements OnInit {

  saving: number = 0;
  improvements: number = 0;
  quality_improvements: number = 0;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.pushData.subscribe(
      data => this.refreshData()
    );
    this.refreshData();
  }

  refreshData() {
    this.improvements = this.dataService.getNumberOfAchievements();
    this.quality_improvements = this.dataService.getNumberofQualityImprovements();
    this.saving = this.dataService.getTotalSaving();
  }
}
