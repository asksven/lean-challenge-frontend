import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Achievement } from './achievements/achievement';
import { Leader } from './leaders/leader';
import { Team } from './team';

import { LogService } from './log.service';
import { environment } from '../environments/environment';

import 'rxjs/Rx';


@Injectable()
export class DataService {
  pushData = new EventEmitter<string>();
  achievementsChanged = new EventEmitter<Achievement[]>()

  private achievements: Achievement[] = [
  ];

  private teams: Team[] = [];

  constructor(private logService: LogService, private http: Http) {
    console.log("initialized DataService");
    this.fetchTeams();
    this.fetchAchievements();
    console.log("Using API URL " + environment.dataServiceEndpoint);
  }

  // inform all observers of a data-change
  private dataChanged(value: string) {
    this.pushData.emit(value);
  }

  // add an achievement
  addAchievement(value: Achievement) {
    this.logService.writeToLog("Added " + JSON.stringify(value) + " to achievements");
    value.id = this.achievements.length + 1;
    this.achievements.push(value);
    this.storeAchievements();
    this.dataChanged("added");
  }
  
  // fetch all achievements
  getAchievements() {
    this.logService.writeToLog("Retrieved " + this.achievements.length + " achievements");
    
    this.fetchTeams();
    this.fetchAchievements();
    
    return this.achievements;
  }

  getAchievement(id: number) {
    var achievement: Achievement;
    for (let i of this.achievements) {
      if (i.id == id) {
        console.log("found achivement with id " + id);
        achievement = i;
      }
    }
    return achievement;
  }

  getAvatar(team: string) {
    var avatar: string = "";
    console.log("getAvatar(" + team + ")");
    for (let i of this.teams) {
      console.log("checking " + i);
      if (i.name === team) {
        console.log("found avatar for team " + team);
        avatar = i.avatar;
      }
    }
    return avatar;
  }

  deleteAchievement(id: number) {

    for (var i: number = 0; i < this.achievements.length; i++) {
      if (this.achievements[i].id == id) {  
        console.log("deleting element " + i + "(id=" + id + ") with id " + this.achievements[i][id]);  
        this.achievements.splice(i, 1);
        
      }
    }
    this.storeAchievements();
  }

  saveAchievement(id: number, team: string, title: string, description: string, saving: number) {
    if(this.achievements[id]) {
        console.log("found.... updating");
        this.achievements[id]['team'] = team;
        this.achievements[id]['title'] = title;
        this.achievements[id]['description'] = description;
        this.achievements[id]['saving'] = saving;
    }
    this.storeAchievements();
  }
// handle persistence
  storeAchievements() {
    const body = JSON.stringify(this.achievements);
    const headers = new Headers( {
      'Content-Type': 'application/json'
    });
    this.http.put(environment.dataServiceEndpoint + '/achievements.json', body, {headers: headers}).subscribe();

  }  

  fetchAchievements() {
    return this.http.get(environment.dataServiceEndpoint + '/achievements.json')
        .map((response: Response) => response.json()).subscribe(
          (data: Achievement[]) => {
            this.achievements = data;
            console.log("retreieved: " + this.achievements);
            this.achievementsChanged.emit(this.achievements);
            this.dataChanged("changed");
          }
        );
  }  

  fetchTeams() {
    return this.http.get(environment.dataServiceEndpoint + '/teams.json')
        .map((response: Response) => response.json()).subscribe(
          (data: Team[]) => {
            this.teams = data;
            console.log("retreieved: " + this.teams);
          }
        );
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
