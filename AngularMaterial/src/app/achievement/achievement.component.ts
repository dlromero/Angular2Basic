import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { IAchievement } from '../home/home.component';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achievement: IAchievement;
  constructor(private achievementsservice: AchievementsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params["id"];
      this.achievement = this.achievementsservice.find(parseInt(id));

      console.log(this.achievement);
    })
  }

}
