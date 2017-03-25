import { Routes, RouterModule } from "@angular/router";

import { AchievementsComponent } from './achievements/achievements.component';
import { AchievementEditComponent } from './achievements/achievement-list/achievement-edit.component';
import { AchievementEditGuard } from './achievements/achievement-list/achievement-edit.guard';

import { LeaderboardComponent } from './leaderboard.component';

const APP_ROUTES: Routes = [
    { path: '', component: LeaderboardComponent},
    { path: 'achievements', component: AchievementsComponent},
    { path: 'achievement/:id', component: AchievementEditComponent, canDeactivate: [AchievementEditGuard]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);