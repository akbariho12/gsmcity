import { Component, ViewChild , ElementRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-lihat',
  templateUrl: 'lihat.html'
})

  
export class LihatPage {
  
  @ViewChild('map')mapElement : ElementRef;
  map:any;
  private long:any;
  private lat:any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.long = params.get("long");
    this.lat = params.get("lat");
  }

  ionViewDidLoad(){

    this.loadMap(this.long,this.lat);
  }
 

  loadMap(long,lat){
 
    let latLng = new google.maps.LatLng(lat,long);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 	
 	let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
 	 });
 
	  let content = "<h5>Pilihan Anda</h5>";          
 
	  this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
}


