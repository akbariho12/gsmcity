import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})


export class SearchPage {
	@ViewChild('map') mapElement: ElementRef;
  	map: any;

   

  constructor(public navCtrl: NavController, public geolocation:Geolocation ) {
       
  }


//loadmap

	ionViewDidLoad(){
    	this.loadMap();
  }
 
  	loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
      
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl : false
        
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, 
    	function(success){
    console.log(success);
	
	});
 
  }

  addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h5>Lokasi Anda</h5>";          
 
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
