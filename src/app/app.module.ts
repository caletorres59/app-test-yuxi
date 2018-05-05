import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
//********* */
//Camera 
import { Camera } from '@ionic-native/camera';
//******** */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpProvider } from '../providers/sign-up/sign-up';
import { ListpostProvider } from '../providers/listpost/listpost';
import { HttpClientModule } from '@angular/common/http';
export const firebaseConfig = 
  {
    apiKey: "AIzaSyBPFQWqCiQ8UjKT3unoGuNG5VBA7iB1pEs",
    authDomain: "app-test-yuxi.firebaseapp.com",
    databaseURL: "https://app-test-yuxi.firebaseio.com",
    projectId: "app-test-yuxi",
    storageBucket: "app-test-yuxi.appspot.com",
    messagingSenderId: "217204243860",
    automaticDataCollectionEnabled :  true
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    SignUpProvider,
    ListpostProvider
  ]
})
export class AppModule {}
