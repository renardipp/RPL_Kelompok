import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the HasilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hasil',
  templateUrl: 'hasil.html',
})
export class HasilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthProvider) {
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HasilPage');
  }

  items = [
      'Renardi',
      'Super Metroid',
      'Mega Man X',
    ];

    itemSelected(item: string) {
      console.log("Selected Item", item);
    }

}
