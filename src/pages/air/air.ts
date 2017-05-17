import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';

@Component({
  selector: 'page-air',
  templateUrl: 'air.html'
})
export class AirPage {

   mataair: FirebaseListObservable<any[]>;

constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.mataair = db.list('/mataair');

	}

  loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }
  
}
