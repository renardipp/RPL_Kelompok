import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pet: string = "puppies";
    isAndroid: boolean = false;

  constructor(public navCtrl: NavController, platform: Platform) {
     this.isAndroid = platform.is('android');

  }

}
