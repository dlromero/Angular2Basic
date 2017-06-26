import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AchievementComponent } from './achievement/achievement.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: ':id', component: AchievementComponent }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }