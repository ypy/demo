import { Component, OnInit } from '@angular/core';
import{MovieService} from 'app/services/movie.service'
import { Movie } from 'app/models/Movie'
import { ActivatedRoute,Router  } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MovieService]
})
export class MovieDetailComponent implements OnInit {
   movie:Movie
   private id:string;
  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute ,
    private router: Router
    
    ) { 
      
    }

  ngOnInit():void {
    this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    this.getMovie();
  }
  getMovie(){

      this.movieService.getMovie(<string>this.id)
      .subscribe(movie => this.movie = movie);
  }
  edit(){
    this.router.navigate(['/edit', this.movie._id]);
  }
}
