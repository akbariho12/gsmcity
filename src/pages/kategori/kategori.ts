import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TamanPage } from '../taman/taman';
import { HutankotaPage } from '../hutankota/hutankota';
import { MakamPage } from '../makam/makam';
import { SuttPage } from '../sutt/sutt';
import { AirPage } from '../air/air';
import { MediajalanPage } from '../mediajalan/mediajalan';


@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html'
})
export class KategoriPage {

  constructor(public navCtrl: NavController) {

  }

  launchTamanPage(){
  	this.navCtrl.push(TamanPage);
  }

  launchHutankotaPage(){
  	this.navCtrl.push(HutankotaPage);
  }

  launchMakamPage(){
  	this.navCtrl.push(MakamPage);
  }

  launchSuttPage(){
  	this.navCtrl.push(SuttPage);
  }

  launchAirPage(){
  	this.navCtrl.push(AirPage);
  }

  launchMediajalanPage(){
  	this.navCtrl.push(MediajalanPage);
  }

}
