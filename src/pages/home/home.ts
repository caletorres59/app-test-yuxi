import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  comPicture:boolean = false;
  comMessage: boolean = true;
  imgGuest: string = null;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  takePicture(): void{
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      correctOrientation: true
      
    }
    ).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgGuest = 'data:image/jpeg;base64,' + imageData;
      //tengo una duda si toca o no guardar en cloud storage
      // const pictures = storage().ref('pictures');
      // pictures.putString(this.imgGuest, 'data_url');
      this.comMessage = false;
      this.comPicture = true;
      
     }, (err) => {
       console.log(err);
     });
  }

 
}
