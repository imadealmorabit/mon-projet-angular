import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  // isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  apareils: any[];

  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
  /*  setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );*/
  }

  ngOnInit(): void {
   // this.appareils = this.appareilService.appareils;
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (apparels: any[]) => {
        this.apareils = apparels;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
  onFetch(){
    this.appareilService.getAppareilsFromServer();
  }
}
