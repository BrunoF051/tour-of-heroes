import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  constructor(private heroService: HeroService) {}

  

}
