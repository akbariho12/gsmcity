import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HeatmapPage } from '../heatmap/heatmap';
import { Geolocation } from '@ionic-native/geolocation';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-ide',
  templateUrl: 'ide.html'
})

export class IdePage {
	public photos: any;
	public base64Image: string;
  public position : any;

    ides : FirebaseListObservable<any[]>;

  constructor(
  public navCtrl: NavController , 
  private camera : Camera , 
  public alertCtrl: AlertController, 
  public geolocation:Geolocation,
  public db : AngularFireDatabase ) {

     this.ides = db.list('/ide');

  }

  ngOnInit(){
  	this.photos= [];
  }

  takePhoto(){
  const options: CameraOptions = {
 	quality: 50,
 	destinationType: this.camera.DestinationType.DATA_URL,
  	encodingType: this.camera.EncodingType.JPEG,
  	mediaType: this.camera.MediaType.PICTURE
  }

   this.geolocation.getCurrentPosition().then((position) => {
    this.camera.getPicture(options).then((imageData) => {
  	// imageData is either a base64 encoded string or a file URI
 	 // If it's base64:
  	this.base64Image = 'data:image/jpeg;base64,' + imageData;
  	this.photos.push(this.base64Image);
  	this.photos.reverse();
    this.position.lat = position.coords.latitude;
    this.position.long = position.coords.longitude;

  }, (err) => {
  	// Handle error
  });
   }, 
    (err) => {
  	// Handle error
  });
  }

  deletePhoto(index){
   let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this picture?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.photos.splice(index,1);
          }
        }
      ]
    });

    confirm.present();
  }

  //loadHeatMap
  launchHeatmapPage(){
    this.navCtrl.push(HeatmapPage);
  }

  
}
