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
import { PipesComponent } from './component/pipes/pipes.component';
import { MyPipesPipe } from './pipes/my-pipes.pipe';
import { DirectiveComponent } from './component/directive/directive.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { ChildComponent } from './component/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    PipesComponent,
    MyPipesPipe,
    DirectiveComponent,
    MyDirectiveDirective,
    ChildComponent
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
      ,{path:"pipes",component:PipesComponent}
      ,{path:"directive",component:DirectiveComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
