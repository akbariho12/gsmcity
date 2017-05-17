import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';


@Component({
  selector: 'page-taman',
  templateUrl: 'taman.html'
})

export class TamanPage {
	
	 tamans: FirebaseListObservable<any[]>;

constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.tamans = db.list('/tamans');

	}

  loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }
}

