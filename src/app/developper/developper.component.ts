import { Component, OnInit } from '@angular/core';
import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  skills: Array<Skill> = [
    new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.png', 'https://angular.io/'),
    new Skill('Javascript', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-21-616522.png', 'https://devdocs.io/javascript/'),
    new Skill('React', 'https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png', 'https://fr.reactjs.org/')
  ]

  devs: Array<Developper> = [
    new Developper('Monster', 'Lee', 23, 'homme', 'Dev Junior', [
      this.skills[0], this.skills[1], this.skills[2]
    ]),
    new Developper('Grimson', 'Georgina', 36, 'femme', 'Programmeur senior', [
      this.skills[1]
    ]),
    new Developper('Dutch', 'Ralf', 29, 'homme', 'Technicien en reconversion', [
      this.skills[0], this.skills[2]
    ])
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
