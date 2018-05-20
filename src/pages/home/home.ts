import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

opencabaiPage(){

  this.navCtrl.push(SearchPage);


}

opentomatPage(){

  this.navCtrl.push(SearchPage);



}

openpadiPage(){


  this.navCtrl.push(SearchPage);

}

}