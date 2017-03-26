import { Routes } from "@angular/router";
import { AchievementsComponent } from "./achievements.component"; 
import { AchievementEditComponent } from "./achievement-list/achievement-edit.component"; 
import { AchievementAddComponent } from "./achievement-list/achievement-add.component"; 

export const ACHIEVEMENTS_ROUTES: Routes = [
    { path: 'new', component: AchievementAddComponent },
    { path: ':id/edit', component: AchievementEditComponent },
    { path: ':id/delete', component: AchievementEditComponent }
]
