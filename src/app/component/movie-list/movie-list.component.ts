import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/models/Movie'
import{MovieService} from 'app/services/movie.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[MovieService]
})
export class MovieListComponent implements OnInit {

  private movies: Movie[];
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
    this.movieService.getMovies()
                     .subscribe(
                       movies => this.movies = movies as Movie[])
  }

  detail(movie:Movie):void{
    this.router.navigate(['/detail', movie._id]);
  }

}
