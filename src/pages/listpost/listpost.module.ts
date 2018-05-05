import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListpostPage } from './listpost';

@NgModule({
  declarations: [
    ListpostPage,
  ],
  imports: [
    IonicPageModule.forChild(ListpostPage),
  ],
})
export class ListpostPageModule {}
