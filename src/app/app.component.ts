import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'accessibility-outline'
    },
    {
      title: 'Tours and Activities',
      url: '/tours',
      icon: 'cloudy-outline'
    },
    {
      title: 'Key West',
      url: '/key-west',
      icon: 'thumbs-up-outline'
    },
    {
      title: 'Seaquarium',
      url: '/seaquarium',
      icon: 'heart-outline'
    },
    {
      title: 'Transportation',
      url: '/trasportation',
      icon: 'car-outline'
    },
    {
      title: 'Boat Rental',
      url: '/boat-rental',
      icon: 'boat-outline'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
