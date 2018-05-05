import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpProvider } from '../../providers/sign-up/sign-up';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  formSign: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public provSignU: SignUpProvider, private formBuilder: FormBuilder) {
    //aplico las validaciones que considere pertinentes para el registro
    this.formSign = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

   /*
  Funcion SignUp
  envia los datos del formulario al provider para registrar un usuario
  
 */
  signUp(): void{
    this.provSignU.register(this.formSign.value.email, this.formSign.value.password);
    this.formSign.reset();
  }
 
}
