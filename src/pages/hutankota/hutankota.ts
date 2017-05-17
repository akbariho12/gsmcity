import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';


@Component({
  selector: 'page-hutankota',
  templateUrl: 'hutankota.html',
})

export class HutankotaPage {
	
  hutankotas: FirebaseListObservable<any[]>;

constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.hutankotas = db.list('/hutankotas');

	}

loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }

}