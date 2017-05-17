import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { KategoriPage } from '../pages/kategori/kategori';
import { IdePage } from '../pages/ide/ide';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { TamanPage } from '../pages/taman/taman';
import { HutankotaPage } from '../pages/hutankota/hutankota';
import { MakamPage } from '../pages/makam/makam';
import { SuttPage } from '../pages/sutt/sutt';
import { AirPage } from '../pages/air/air';
import { MediajalanPage } from '../pages/mediajalan/mediajalan';
import { LihatPage } from '../pages/lihat/lihat';
import { StatistikPage } from '../pages/statistik/statistik';
import { HeatmapPage } from '../pages/heatmap/heatmap';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';



@NgModule({
  declarations: [
    MyApp,
    KategoriPage,
    IdePage,
    HomePage,
    TabsPage,
    SearchPage,
    TamanPage,
    HutankotaPage,
    MakamPage,
    SuttPage,
    AirPage,
    MediajalanPage,
    LihatPage,
    StatistikPage,
    HeatmapPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBTihQa6Lb9Orv8YbKN5iC30BYN46XZ4N8",
      authDomain: "gsmcity-166303.firebaseapp.com",
      databaseURL: "https://gsmcity-166303.firebaseio.com",
      projectId: "gsmcity-166303",
      storageBucket: "gsmcity-166303.appspot.com",
      messagingSenderId: "799980938342"
    }),
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KategoriPage,
    IdePage,
    HomePage,
    TabsPage,
    SearchPage,
    TamanPage,
    HutankotaPage,
    MakamPage,
    SuttPage,
    AirPage,
    MediajalanPage,
    LihatPage,
    StatistikPage,
    HeatmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
