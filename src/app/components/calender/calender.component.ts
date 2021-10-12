import { Component, ViewChild } from '@angular/core';
import { setOptions, MbscDatepicker , localeAr } from '@mobiscroll/angular';
import{CalendarService} from './../../services/calendar.service';
setOptions({
    locale: localeAr,
    theme: 'ios',
    themeVariant: 'light'
});

@Component({
    selector: 'app-calender',
    templateUrl: './calender.component.html',
    styleUrls: ['./calender.component.scss']
})
export class Calender {
    // Place the code below into your own component or use the full template
    range;
    @ViewChild('picker', { static: false })
    inst!: MbscDatepicker;

    today = new Date();

    openPicker(): void {
        this.inst.open();
    }
    selected(){
      CalendarService.setRange(this.range);
      console.log("uu");
    }
}
