import {Component, OnInit} from '@angular/core';
import {MovieNews} from './movie-news';
import {MovieService} from '../service/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  private cinemaData$: Observable<MovieNews[]>;
  searchText: any;

  constructor(private movieservice: MovieService) {
  }

  ngOnInit() {
    this.cinemaData$ = this.movieservice.getData();
  }

}
