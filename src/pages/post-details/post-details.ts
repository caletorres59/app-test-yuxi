import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Posters } from '../listpost/post.interface';

/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {
  post: Posters;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('contentPost');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }

}
