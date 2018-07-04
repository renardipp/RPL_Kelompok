import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authProvider: AuthProvider) {
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

}
