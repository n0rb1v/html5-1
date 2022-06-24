import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  };

}
