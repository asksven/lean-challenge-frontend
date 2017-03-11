import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LeaderboardComponent } from './leaderboard.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LeadersItemComponent } from './leaders/leader-list/leaders-item.component';
import { LeaderDetailsComponent } from './leaders/leader-details/leader-details.component';
import { AchievementsItemComponent } from './achievements/achievement-list/achievements-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaderboardComponent,
    AchievementsComponent,
    LeadersComponent,
    LeadersItemComponent,
    LeaderDetailsComponent,
    AchievementsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
