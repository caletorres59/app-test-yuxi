
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello SignUpProvider Provider');
  }

   /*
  Funcion register
  utilizo el metodo de crear usuario con email y contrasela
  si lo creo en el appcomponent lo direcciono a mi pagina principal
  sino muestro un error en consola.
  no considere importante generar un alerta ya que tengo validaciones
  en los campos y el formulario para que la data sea la correcta.
 */
  register(email:string, password:string)
  {
   const result =  this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      
      console.log(user);
    })
    .catch(error => console.log(error));
  }

}
