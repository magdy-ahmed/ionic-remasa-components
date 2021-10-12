import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { setOptions, MbscDatepicker , localeAr } from '@mobiscroll/angular';
setOptions({
  locale: localeAr,
  theme: 'ios',
  themeVariant: 'light'
});

@Component({
  selector: 'app-modal-calender-page',
  templateUrl: './modal-calender-page.component.html',
  styleUrls: ['./modal-calender-page.component.scss'],
})

export class ModalCalenderPageComponent implements OnInit {
  categories =[
    {'id':1,"category_name":"حدائق",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':2,"category_name":"حدائق",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':3,"category_name":"حدائق",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':4,"category_name":"حدائق",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'},
    {'id':5,"category_name":"حدائق",'img':'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'}
  ];
  selected=[];
  constructor() { }

  ngOnInit() {}
  @ViewChild('picker', { static: false })
  inst!: MbscDatepicker;

  today = new Date();

  openPicker(): void {
      this.inst.open();
  }

}




