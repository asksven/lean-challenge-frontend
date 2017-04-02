import { Routes } from "@angular/router";
import { AchievementsComponent } from "./achievements.component"; 
import { AchievementEditComponent } from "./achievement-list/achievement-edit.component"; 

import { AuthGuard } from '../auth.guard';

export const ACHIEVEMENTS_ROUTES: Routes = [
    { path: 'new', component: AchievementEditComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: AchievementEditComponent, canActivate: [AuthGuard] },
]
