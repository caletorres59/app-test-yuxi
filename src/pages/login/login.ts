import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Login } from './login.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { ShowWhen } from 'ionic-angular/components/show-hide-when/show-when';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user: Login;

  myForm: FormGroup;

  result: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public alertCtrl: AlertController, public afAuth: AngularFireAuth) {
    //aplico las validaciones que considere pertinentes para la autenticación
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /*
  Funcion Login
  envia los datos del formulario al provider y valida el resultado
  para verificar si existe o no existe el usuario 
  si no existe muestra una alerta de lo contario.
  el app component lo direcciona a la pagina principal tabs
 */
  login(): void {

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
      .then((user) => {
        this.user = user;
      }).catch(error => {
        let prompt = this.alertCtrl.create({
          title: 'Login',
          message: "Incorrect data please try again or register in the app",
          buttons: [
            {
              text: 'Try Again!',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Sign Up',
              handler: data => {
                this.navCtrl.push('SignUpPage');
              }
            }
          ]
        });
        prompt.present();
      });
    // this.provLogin.login(this.myForm.value.email, this.myForm.value.password);
    // if (!this.result) 
    // {
    //   this.showPrompt();
    // }

    this.myForm.reset();

  }

  /*
   Direcciona a la pagina de registro
  */

  goToSignUp(): void {
    this.navCtrl.push('SignUpPage');
  }


}
