import { AdventuresProvider } from './../../providers/adventures/adventures';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  adventures: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public adventuresProvider: AdventuresProvider
  ) {}

  ngOnInit(): void {
    this.adventures = this.adventuresProvider.getAdventures();
  }

}
