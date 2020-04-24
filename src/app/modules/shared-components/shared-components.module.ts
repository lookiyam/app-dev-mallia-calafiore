import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    FooterComponent
  ],

  entryComponents:[
    FooterComponent
  ],

  exports:[
    FooterComponent
  ],

  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
