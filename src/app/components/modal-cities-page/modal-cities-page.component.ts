import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cities-page',
  templateUrl: './modal-cities-page.component.html',
  styleUrls: ['./modal-cities-page.component.scss'],
})
export class ModalCitiesPageComponent implements OnInit {
  citiesBekup =[
    {'id':1,"city":"الأسكندرية",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':2,"city":"القاهرة",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':3,"city":"بور سعيد",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':4,"city":"أسوان",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':5,"city":"الأقصر",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':6,"city":"الأسكندرية",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':7,"city":"القاهرة",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':8,"city":"بور سعيد",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':9,"city":"أسوان",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':10,"city":"الأقصر",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
  ];
 
  cities=this.citiesBekup;
  selected=[];
  constructor() { 

  }
  selectedCity(city){
    console.log(city);
  }
  async filterList(evt) {
    this.cities = this.citiesBekup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.cities = this.cities.filter(currentCity => {
      if (currentCity.city && searchTerm) {
        return (currentCity.city.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  ngOnInit() {}

}
