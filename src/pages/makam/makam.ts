import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';


@Component({
  selector: 'page-makam',
  templateUrl: 'makam.html'
})
export class MakamPage {

  makam: FirebaseListObservable<any[]>;

constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.makam = db.list('/makam');

	}
  
loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }
}
