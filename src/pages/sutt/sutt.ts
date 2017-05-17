import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';


@Component({
  selector: 'page-sutt',
  templateUrl: 'sutt.html'
})
export class SuttPage {

sutt: FirebaseListObservable<any[]>;

constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.sutt = db.list('/sutt');

	}

loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }
}
