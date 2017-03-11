import { Component, OnInit, Input } from '@angular/core';

import { Leader } from '../leader';

@Component({
  selector: 'lc-leaders-item',
  templateUrl: './leaders-item.component.html',
  styleUrls: ['./leaders-item.component.css']
})
export class LeadersItemComponent implements OnInit {

  @Input() leader: Leader;
  leaderId: number;

  
  constructor() { }

  ngOnInit() {
  }

}
