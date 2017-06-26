import { Injectable } from '@angular/core';
import { IAchievement } from '../home/home.component';

@Injectable()
export class AchievementsService {
  achievements: IAchievement[];
  constructor() {
    this.achievements = [{ id: 1, title: "Logré algo muy interesante", description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" },
    { id: 2, title: "Logré otra cosa muy interesante", description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" },
    { id: 3, title: "Logré algo muy interesante", description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500" }];
  }

  find(id: number): IAchievement {
    return this.achievements.find((achievement)=> achievement.id ==id);
  }

  all(): IAchievement[] {
    return this.achievements;
  }

}
