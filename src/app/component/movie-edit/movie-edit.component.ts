import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from 'app/models/Movie'
import { MovieService } from 'app/services/movie.service'
import { Message } from 'app/models/Message';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  providers: [MovieService]
})
export class MovieEditComponent implements OnInit {

  movie: Movie = new Movie();
  msg: Message;
  private id: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id!="-1")
      {
          this.movieService.getMovie(<string>this.id)
      .subscribe(movie => this.movie = movie);
      }
    });

  }

  submit() {
    if (this.id=="-1")
    {
      this.movieService.addMovie(this.movie)
        .subscribe(msg =>
          this.router.navigate(["/movies"])
        );
    }
    else
    {
this.movieService.update(this.movie)
        .subscribe(msg =>
          this.router.navigate(["/movies"])
        );
    }
  }
}
