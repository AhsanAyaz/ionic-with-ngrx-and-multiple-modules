import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from "../pages/list/list";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ListPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private _platform: Platform,
    private _menu: MenuController,
    private _statusBar: StatusBar,
    private _splashScreen: SplashScreen,

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._statusBar.styleDefault();
      this._splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this._menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
