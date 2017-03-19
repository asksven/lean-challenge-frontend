import { Injectable } from '@angular/core';

import { Achievement } from './achievements/achievement';
import { Leader } from './leaders/leader';

import { LogService } from './log.service';

@Injectable()
export class DataService {
  private achievements: Achievement[] = [
    new Achievement('Team CCT', 'Optimized Azure Group FW Process', "The process was optimized in order to avoid generating deltas", 50),
    new Achievement('Team CCT', 'Optimized laptop provisioning for devs', "The process was optimized in order to avoid projects to requests VM-Ware using their own charge code", 20),
    new Achievement('Team CCT', 'Automated DEP status', "The DEP list is automatically updated when devices are exchanged", 0),
    new Achievement('Team SnS', 'Some improvement', "Some text", 0)
    
  ];

  constructor(private logService: LogService) {

  }

  addAchievement(value: Achievement) {
    this.logService.writeToLog("Added " + value + " to achievements");
    this.achievements.push(value);
  }
  
  getAchievements() {
    this.logService.writeToLog("Retrieved " + this.achievements.length + " achievements");
    return this.achievements;
  }

  getNumberOfAchievements() {
    return this.achievements.length;
  }

  getNumberofQualityImprovements() {
    var count: number = 0;
    for (let i of this.achievements) {
      if (i.saving == 0) {
        count += 1;
      }
    }
    return count;
  }

  getTotalSaving() {
    var saving: number = 0;
    for (let i of this.achievements) {
      if (i.saving != 0) {
        saving += i.saving;
      }
    }
    return saving;
  }

  getLeaders() {
    var leaders: Leader[] = [];

    for (let i of this.achievements) {
      var x:Leader = leaders.find(leader => leader.team === i.team);
      if (!x) {
        // add to leaders
        var leader:Leader = new Leader(i.team, i.saving, 1, 0);
        if (i.saving == 0) {
          leader.quality_improvements = 1;
        }
        
        leaders.push(leader)
      } else {
        x.improvements += 1;
        x.saving += i.saving;
        if (i.saving == 0) {
          x.quality_improvements = 1;
        }
      }
    }

    return leaders;
  } 

}
