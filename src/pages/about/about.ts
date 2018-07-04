import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pet: string = "puppies";
    isAndroid: boolean = false;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authProvider: AuthProvider) {
    }
  
    logOut(): void {
      this.authProvider.logoutUser().then(() => {
        this.navCtrl.setRoot("LoginPage");
      });
    }
}
