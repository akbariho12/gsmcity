import { Component } from '@angular/core';

import { KategoriPage } from '../kategori/kategori';
import { IdePage } from '../ide/ide';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { StatistikPage } from '../statistik/statistik';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = KategoriPage;
  tab3Root = SearchPage;
  tab4Root = IdePage;
  tab5Root = StatistikPage;

  constructor() {

  }
}
