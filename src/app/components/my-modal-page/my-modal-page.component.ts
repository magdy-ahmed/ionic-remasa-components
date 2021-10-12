import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-modal-page',
  templateUrl: './my-modal-page.component.html',
  styleUrls: ['./my-modal-page.component.scss'],
})
export class MyModalPageComponent implements OnInit {
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
  selectedCategory(item){
    console.log(item);
    if(this.selected.includes(item)){
      var index = this.selected.indexOf(item);
      this.selected.splice(index,1);
    }else{
      this.selected.push(item);
    }
  }
}
