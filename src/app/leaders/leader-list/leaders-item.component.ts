import { Component, OnInit, Input } from '@angular/core';

import { Leader } from '../leader';

import { DataService } from '../../data.service';

@Component({
  selector: 'lc-leaders-item',
  templateUrl: './leaders-item.component.html',
  styleUrls: ['./leaders-item.component.css']
})
export class LeadersItemComponent implements OnInit {

  @Input() leader: Leader;
  avatar: string = "test";
  leaderId: number;

  
  constructor(private dataService: DataService) { 
   }

  ngOnInit() {
    console.log("init, looking for avatar of team " + this.leader.team);
    this.avatar = this.dataService.getAvatar(this.leader.team);

  }

}
