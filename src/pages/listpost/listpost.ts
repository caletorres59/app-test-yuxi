import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListpostProvider } from '../../providers/listpost/listpost';
import { Posters } from './post.interface';

/**
 * Generated class for the ListpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listpost',
  templateUrl: 'listpost.html',
})
export class ListpostPage {
  posters: Posters[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public provPost:ListpostProvider ) {
    provPost.getPost().subscribe(content => {
    
      this.posters = content;
      
      }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpostPage');
  }
  /**
 * Funcion que me permite mostrar un post con todos sus atributos
 *
 * Parametro Post de tipos Posters
 * 
 */
  showPost(post:Posters): void
  {
    
    this.navCtrl.push('PostDetailsPage', {contentPost: post});
  }

}
