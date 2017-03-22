import { Injectable } from '@angular/core';
import { Jsonp, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Message } from 'app/models/Message';
import { Movie } from 'app/models/Movie'
@Injectable()
export class MovieService {

  private _baseUrl = "http://127.0.0.1:8080/api";
  private options: RequestOptions;
  constructor(private jsonp: Jsonp) {
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
  getMovies(): Observable<Movie[]> {
    let apiUrl = "/movies";
    return this.jsonp.get(this._baseUrl + apiUrl, this.options)
      .map(res => res.json())
  } 

  getMovie(id:string):Observable<Movie>{
    let apiUrl = "/movies/";
    //this.options.search.set("id",id.toString());
    return this.jsonp.get(this._baseUrl + apiUrl+id, this.options)
      .map(res => res.json())
  }


}