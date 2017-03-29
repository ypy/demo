import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ChildComponent } from '../child/child.component'
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit, AfterViewInit {
  isRed: boolean = true;
  currentStyles: {};
  fruit: string = "banana";
  feedback: string;


  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      console.log( this.childComponent.view);
  }
  changeColor() {
    this.isRed = !this.isRed;
    this.setCurrentStyles();
  }


  setCurrentStyles() {
    this.currentStyles = {

      'font-style': this.isRed ? 'italic' : 'normal',
      'font-weight': !this.isRed ? 'bold' : 'normal',
      'font-size': this.isRed ? '24px' : '12px'
    };
  }

  reiceiveFeedback(event) {
    this.feedback = event;
  }
}
