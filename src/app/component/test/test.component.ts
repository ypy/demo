import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Hobby } from 'app/models/Hobby';
import { Message } from 'app/models/Message';
import { MovieService } from 'app/services/movie.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [MovieService]
})

export class TestComponent implements OnInit {
  name: string;
  age: number;
  hobby: string;
  hobbies: Array<Hobby>;
  msg: Message;
  input1: string;
  input2: string;
  input3: string;

  constructor(private movieService: MovieService) {
    //this.msg = "you click me";
    this.name = "daniel";
    this.age = 33;

    this.hobbies = [
      new Hobby("basketball", 1),
      new Hobby("swimming", 2),
      new Hobby("swordplay", 3),
      new Hobby("music", 4)
    ];
    this.hobby = this.hobbies[0].name;//"basketball";

  }

  showMsg() {
    this.movieService.test().subscribe(
      msg => alert(msg.Message)


    );
  }

  keyupHandler1(event: any) {
    this.input1 = event.target.value;
  }

  keyupHandler2(event: KeyboardEvent) {
    this.input2 = (<HTMLInputElement>event.target).value;
  }

  keyupHandler3(value: string) {
    this.input3 = value;
  }

  ngOnInit() {
  }

}
export class NgbdAlertBasic { }