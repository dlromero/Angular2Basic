import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AchievementsService } from './services/achievements.service';
import { AchievementComponent } from './achievement/achievement.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [AchievementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
