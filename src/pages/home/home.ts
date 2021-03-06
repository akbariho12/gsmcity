import { Component, ViewChild , ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

  
export class HomePage {
  
  @ViewChild('map')mapElement : ElementRef;
  map:any;
  
  constructor(public navCtrl: NavController ) {

  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-7.981897, 112.630574);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl : false
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}


