import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MyModalComponent} from './components/my-modal/my-modal.component';
import { MyModalPageComponent } from './components/my-modal-page/my-modal-page.component';
import {ModalCalenderComponent} from './components/modal-calender/modal-calender.component'
import {ModalCitiesPageComponent} from './components/modal-cities-page/modal-cities-page.component'

// import { Calender } from './components/calender/calender.component';
@NgModule({
  declarations: [AppComponent,
    MyModalPageComponent,
    MyModalComponent,
    ModalCalenderComponent,
    ModalCitiesPageComponent
  
],
  entryComponents: [],
  imports: [ 
    FormsModule,  
    MbscModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
