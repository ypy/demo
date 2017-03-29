import { Injectable } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Message } from 'app/models/Message';
import { Movie } from 'app/models/Movie'
@Injectable()
export class MovieService {

  private _baseUrl = "http://127.0.0.1:8080/api";
  private options: RequestOptions;

  constructor(
    private jsonp: Jsonp,
    private http: Http
  ) {
    let headers = new Headers({ "myHeader": "myValue" });
    headers.append("dataType", "application/jsonp");
    let params = new URLSearchParams();
    params.set('format', 'jsonp');
    params.set('callback', 'JSONP_CALLBACK');
    this.options = new RequestOptions({ headers: headers, search: params });


  };

  test(): Observable<Message> {
    return this.jsonp.get(this._baseUrl, this.options)//+"?callback=JSONP_CALLBACK")
      .map(response => response.json())

  }
  getMovies() {
    let apiUrl = "/movies";
    return this.jsonp.get(this._baseUrl + apiUrl, this.options)
      .map(res => res.json())
  }

  search(title:string)  {
    let apiUrl = "/search/";
    return this.jsonp.get(this._baseUrl + apiUrl + title, this.options)
      .map(res => res.json())
  }

  getMovie(id: string) {
    let apiUrl = "/movies/";
    return this.jsonp.get(this._baseUrl + apiUrl + id, this.options)
      .map(res => res.json());
  }

  addMovie(movie: Movie): Observable<Message> {
    let apiUrl = "/movies";
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let body = this.createBody(movie);
    return this.http.post(this._baseUrl + apiUrl, body, headers)
      .map(res => res.json());
  }

  update(movie: Movie): Observable<Message> {
    let apiUrl = "/movies/" + movie._id;
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let body = this.createBody(movie);

    return this.http.put(this._baseUrl + apiUrl, body, headers)
      .map(res => res.json());
  }

  delete(id: string): Observable<Message> {
    let apiUrl = "/movies/";
    let headers = new Headers();

    return this.http.delete(this._baseUrl + apiUrl + id, headers)
      .map(res => res.json());
  }

  private createBody(movie: Movie): URLSearchParams {
    let body = new URLSearchParams();
    body.append('releaseYear', movie.releaseYear.toString());
    body.append('title', movie.title.toString());
    body.append('director', movie.director.toString());
    body.append('genre', movie.genre.toString());
    body.append('play', movie.play.toString());
    return body;
  }

}