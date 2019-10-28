import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

   heroes:any[] = [];

  constructor(private _heroesService:HeroesService ) {
     // heroes = this._heroesService.getHeroes();
     // console.log(heroes);
  }

  ngOnInit() {
     this.heroes = this._heroesService.getHeroes();
     // console.log(heroes);
  }

}
