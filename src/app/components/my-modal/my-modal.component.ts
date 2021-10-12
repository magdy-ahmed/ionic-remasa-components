import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPageComponent } from '../my-modal-page/my-modal-page.component';
import { ModalCalenderPageComponent } from '../modal-calender-page/modal-calender-page.component';
import { Tab1Page } from '../../tab1/tab1.page';
import { ModalCitiesPageComponent } from '../modal-cities-page/modal-cities-page.component';


@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModalComponent implements OnInit {

  constructor(public modalController: ModalController) { 

  }

  ngOnInit() {
    
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: MyModalPageComponent,
      cssClass: 'my-custom-class',
      mode:"ios",
      swipeToClose:true,
      showBackdrop:true
    });
    return await modal.present();
  }
  // show calender modal page
  async presentModalCalender() {
    return  await this.Present(Tab1Page,"my-custom-class")
  }
  async presentModalCities() {
    return  await this.Present(ModalCitiesPageComponent,"my-custom-class")
  }
// function to show modeal
  async Present(Component,css){
    const modal = await this.modalController.create({
      component: Component,
      cssClass: css,
      mode:"ios",
      swipeToClose:true,
      showBackdrop:true
    });
    return await modal.present();
  }
}
