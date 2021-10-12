import { Component, ViewChild } from '@angular/core';
import { setOptions, MbscDatepicker , localeAr } from '@mobiscroll/angular';

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

    @ViewChild('picker', { static: false })
    inst!: MbscDatepicker;

    today = new Date();

    openPicker(): void {
        this.inst.open();
    }
}
