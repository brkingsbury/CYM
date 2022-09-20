import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';
import { currentOfferings } from '../app.offerings';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})

export class ClassesComponent implements AfterViewInit {
  public currentClasses = currentOfferings;

  calendly(event: any) {
    window.Calendly.initPopupWidget({
      url: event.calendlyUrl
    });
  }
  ngAfterViewInit() {
    feather.replace();
  }
}
