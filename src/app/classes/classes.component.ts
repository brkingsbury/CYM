import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';
import { currentOfferings } from '../app.offerings';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})

export class ClassesComponent implements AfterViewInit {
  public currentClasses:any [] = currentOfferings;

  // calendly(event: any) {
  //   window.Calendly.initPopupWidget({
  //     url: event.calendlyUrl + '?hide_gdpr_banner=1' + '&background_color=F6F9F8&primary_color=335d57'
  //   });
  // }
  ngAfterViewInit() {
    feather.replace();
  }

  timeCheck(classTime: Date) { 
    let time = new Date();
    let h = classTime.getHours();
    let m = classTime.getMinutes();
    time.setHours(h);
    time.setMinutes(m);
    return time;
  }
}