import { Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  secondes: number;

  constructor() {
  }

  ngOnInit(): void {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('Une erreur a ete rencontree !')
      },
      () => {
        console.log('Observable completee !');
      }
    );
}
}
