import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LihatPage } from '../lihat/lihat';


@Component({
  selector: 'page-mediajalan',
  templateUrl: 'mediajalan.html'
})
export class MediajalanPage {

  mediajalan: FirebaseListObservable<any[]>;

	constructor(public navCtrl: NavController, db: AngularFireDatabase) {
  this.mediajalan = db.list('/mediajalan');

	}

  loadMap(lat,long){
  	this.navCtrl.push(LihatPage,{
      lat: lat,
      long:long,
    });
  }

}
