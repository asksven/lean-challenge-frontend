import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Leader } from './leader';

import { DataService } from '../data.service';

@Component({
  selector: 'lc-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  leaders: Leader[] = [];
  
  @Output() leaderSelected = new EventEmitter<Leader>();
  
  constructor(private dataService: DataService) {
    this.leaders = dataService.getLeaders();
  }

  onSelected(leader: Leader) {
    console.log("LeadersComponent.onSelected " +leader.team);
    this.leaderSelected.emit(leader);
  }

 
  ngOnInit() {
  }

}
