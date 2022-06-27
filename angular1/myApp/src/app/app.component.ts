import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  listObservable!: Observable<any>;
  constructor() {
    this.listObservable = new Observable(observer => {
      let to = setTimeout( () => {
        observer.next("Megjottem");
      }, 15000);
      let to2 = setTimeout( () => {
        observer.complete();
      }, 20000);
    });
    this.listObservable.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log("complete")
      
    );
  }

}
