import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posters } from '../../pages/listpost/post.interface';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ListpostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListpostProvider {

  //url para la peticion http que obtiene los post 
  postUrl = 'https://jsonplaceholder.typicode.com/posts/';
 
  constructor(public http: HttpClient) {
    console.log('Hello ListpostProvider Provider');
  }
  /*
  Metodo que me permite obtener los post
  Retorno observable<Posters>
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
  getPost()
  {
    return this.http.get<Posters[]>(this.postUrl);
 } 
}
