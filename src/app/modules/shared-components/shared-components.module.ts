import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterTabComponent } from 'src/app/custom-components/footer-tab/footer-tab.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterTabComponent
  ],

entryComponents:[
  FooterTabComponent
],

exports:[
  FooterTabComponent
],


  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
