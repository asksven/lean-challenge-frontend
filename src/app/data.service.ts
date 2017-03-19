import { Injectable, EventEmitter } from '@angular/core';

import { Achievement } from './achievements/achievement';
import { Leader } from './leaders/leader';

import { LogService } from './log.service';

@Injectable()
export class DataService {
  pushData = new EventEmitter<string>();

  private achievements: Achievement[] = [
    new Achievement('Team CCT', 'Optimized Azure Group FW Process', "The process was optimized in order to avoid generating deltas", 50),
    new Achievement('Team CCT', 'Optimized laptop provisioning for devs', "The process was optimized in order to avoid projects to requests VM-Ware using their own charge code", 20),
    new Achievement('Team CCT', 'Automated DEP status', "The DEP list is automatically updated when devices are exchanged", 0),
    new Achievement('Team SnS', 'Some improvement', "Some text", 0)
    
  ];

  constructor(private logService: LogService) {
    console.log("initialized DataService");
  }

  // inform all observers of a data-change
  private dataChanged(value: string) {
    this.pushData.emit(value);
  }

  // add an achievement
  addAchievement(value: Achievement) {
    this.logService.writeToLog("Added " + JSON.stringify(value) + " to achievements");
    this.achievements.push(value);
    this.dataChanged("added");
  }
  
  // fetch all achievements
  getAchievements() {
    this.logService.writeToLog("Retrieved " + this.achievements.length + " achievements");
    return this.achievements;
  }

  // get the total number of achievements
  getNumberOfAchievements() {
    return this.achievements.length;
  }

  // get the total number of quality-only achievements
  getNumberofQualityImprovements() {
    var count: number = 0;
    for (let i of this.achievements) {
      if (i.saving == 0) {
        count += 1;
      }
    }
    return count;
  }

  // get the total savings
  getTotalSaving() {
    var saving: number = 0;
    for (let i of this.achievements) {
      if (i.saving != 0) {
        console.log("adding " + i.saving + " to " + saving);
        saving += i.saving;
        console.log("total saving " + saving);
      }
    }
    return saving;
  }

  // get the acievements summary by team == Leader board
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

    // we make sure that the leaders are sorted by number of improvements
    // as we want to encourage the numbers rather than the saving
    return leaders.sort( function(a,b) {
      return b.improvements - a.improvements
    })
  } 

}
