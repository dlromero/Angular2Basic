import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  achievements: IAchievement[];
  title: string = "Bienvenido";

  constructor(private achievementsservice: AchievementsService) { }

  ngOnInit() {
    this.achievements = this.achievementsservice.all();
  }

}

//id, title, description

export interface IAchievement {
  id: number;
  title: string;
  description?: string;
}
