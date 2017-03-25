import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Achievement } from '../achievement';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-achievement-edit',
  templateUrl: './achievement-edit.component.html',
  styleUrls: ['./achievement-edit.component.css']
})
export class AchievementEditComponent implements OnInit {

  private id: number;
  @Input() achievement: Achievement;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
    this.achievement = this.dataService.getAchievement(this.id);
  }

  saveAchievement(team: string, title: string, description: string, saving: number) {
    console.log("addAchievement was passed " + team);
    this.dataService.saveAchievement(this.id, team, title, description, +saving);
    
    // navigate away
    this.router.navigate(['..']); 
  }

}
