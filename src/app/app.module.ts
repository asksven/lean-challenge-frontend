import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LeaderboardComponent } from './leaderboard.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AchievementsSummaryComponent } from './achievements/achievements-summary.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LeadersItemComponent } from './leaders/leader-list/leaders-item.component';
import { LeaderDetailsComponent } from './leaders/leader-details/leader-details.component';
import { AchievementsItemComponent } from './achievements/achievement-list/achievements-item.component';
import { AchievementEditGuard } from './achievements/achievement-list/achievement-edit.guard';

import { LogService } from './log.service';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { routing } from './app.routing';
import { AchievementEditComponent } from './achievements/achievement-list/achievement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaderboardComponent,
    AchievementsSummaryComponent,
    AchievementsComponent,
    LeadersComponent,
    LeadersItemComponent,
    LeaderDetailsComponent,
    AchievementsItemComponent,
    AchievementEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LogService, DataService, AuthService, AchievementEditGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
