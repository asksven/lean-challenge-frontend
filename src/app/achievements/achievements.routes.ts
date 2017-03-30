import { Routes } from "@angular/router";
import { AchievementsComponent } from "./achievements.component"; 
import { AchievementEditComponent } from "./achievement-list/achievement-edit.component"; 

export const ACHIEVEMENTS_ROUTES: Routes = [
    { path: 'new', component: AchievementEditComponent },
    { path: ':id/edit', component: AchievementEditComponent },
    { path: ':id/delete', component: AchievementEditComponent }
]
