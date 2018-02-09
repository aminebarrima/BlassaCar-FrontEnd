import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(x => this.heroes = x);
    // this.heroes = this.heroService.getHeroes();
  }
  // heroes = this.heroService.getHeroes();
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
