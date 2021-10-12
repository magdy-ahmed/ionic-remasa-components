import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  static rangeDate;
  constructor() {

   }
   static setRange(range){
    CalendarService.rangeDate = range;
   }
   getRange(){
    return CalendarService.rangeDate;
   }
}
