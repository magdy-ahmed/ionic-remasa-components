import { Component, OnInit } from '@angular/core';
import { times } from 'src/app/enumes/times';
@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss'],
})

export class CustomSearchComponent implements OnInit {
  openAt = times.opanAt;
  closeAt = times.closeAt;
  cities =[
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
  areas =[
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
  popoverOptions={
    cssClass:"select-popover",
    mod:"ios"
  }
  constructor() { }

  ngOnInit() {}
  async filterList(evt) {
    this.cities = this.cities;
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
}
