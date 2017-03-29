import { Component, OnInit,ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit  {
 
  feel: string = "很好吃";
  _fruit: string = "";

  view:string="我是子组件的属性";

  @Input()
  set fruit(fruit: string) {
    this._fruit = this.fruit + "很好吃";
  }

  get fruit() { return this._fruit; }

  @Output('feedback') feelOut = new EventEmitter();

  constructor() {
    this.feel = "很好吃";
  }

  ngOnInit() {

  }
  feedback() {

    this.feelOut.emit(this.feel);
  }

}
