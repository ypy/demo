import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Movie } from 'app/models/Movie'
import { MovieService } from 'app/services/movie.service'
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {

  private movies: Observable<Movie[]>;;
  title: string = "";
  private searchTermStream = new Subject<string>();

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.getMovies();

    // this.movies = this.searchTermStream
    //   .debounceTime(300)
    //   .distinctUntilChanged()
    //   .switchMap((title: string) => this.movieService.search(title));
  }

  search(): void {
    this.movieService.search(this.title).subscribe(
      movies => this.movies = movies
    );;
    //this.searchTermStream.next(this.title);
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(
      movies => this.movies = movies)
  }

  detail(movie: Movie): void {
    this.router.navigate(['/detail', movie._id]);
  }

  edit(movie: Movie): void {
    this.router.navigate(['/edit', movie._id]);
  }

  add(movie: Movie): void {
    this.router.navigate(['/edit', "-1"]);
  }

  delete(movie: Movie): void {
    this.movieService.delete(movie._id.toString())
      .subscribe(msg =>
        this.getMovies()
      );
  }

  clear(): void {
    this.title = "";
  }

}
