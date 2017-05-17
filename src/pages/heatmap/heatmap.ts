import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-heatmap',
  templateUrl: 'heatmap.html'
})


export class HeatmapPage {
 @ViewChild('map','heatmap')mapElement : ElementRef;
  map:any;
  heatmap : any;
  
  constructor(public navCtrl: NavController ) {

  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(37.775, -122.434);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.SATELLITE

    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 }
  }
