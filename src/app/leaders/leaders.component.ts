import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Leader } from './leader';

@Component({
  selector: 'lc-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  leaders: Leader[] = [];

  @Output() leaderSelected = new EventEmitter<Leader>();
  leader = new Leader('Team CCT', 1500, 25, 5);
  constructor() { }

  onSelected(leader: Leader) {
    console.log("LeadersComponent.onSelected " +leader.team);
    this.leaderSelected.emit(this.leader);
  }

 
  ngOnInit() {
  }

}
