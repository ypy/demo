import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieEditComponent } from './component/movie-edit/movie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'test', component: TestComponent,pathMatch:"full"}
      ,{ path: 'movies', component: MovieListComponent }
      ,{path:"detail/:id",component:MovieDetailComponent}
      ,{path:"edit/:id",component:MovieEditComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
