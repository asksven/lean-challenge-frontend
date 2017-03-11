import { Component, OnInit } from '@angular/core';

import { Achievement } from '../../achievements/achievement'
import { Leader } from '../leader';

@Component({
  selector: 'lc-leader-details',
  templateUrl: './leader-details.component.html',
  styleUrls: ['./leader-details.component.css']
})
export class LeaderDetailsComponent implements OnInit {

  achievements: Achievement[] = []
  achievement: Achievement = new Achievement("CCT", "Optimized Azure FW Process", "Instead of trying to keep up pace and generate deltas for changes within the 2800 Azure Subnets the process now deletes and re-creates all subnets for every change", 60);
  constructor() { }
    
  ngOnInit() {
  }

}

