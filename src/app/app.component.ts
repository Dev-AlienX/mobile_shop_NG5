import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  title = 'material-app';
  currentDate = new Date(1988, 3, 15); // April 15, 1988
  toggle = false; // start with true == shortDate
  testTest = 'Ganesh';
  abc() { this.toggle = !this.toggle; }
}
