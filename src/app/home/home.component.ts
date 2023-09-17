import { OnInit, Component } from '@angular/core';
// import { formatDate } from '@angular/common';
import { currentOfferings } from '../app.offerings';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentEvents = currentOfferings;
  public upcomingEvents: any = [];
  public showAll = false;
  public expanded = false;

  // calendly(event: any) {
  //   const month = formatDate(event.date, 'yyyy-MM', 'en-US');
  //   window.Calendly.initPopupWidget({
  //     url: event.details.calendlyUrl + '?hide_gdpr_banner=1&back=1&month=' + month + '&date=' + event.date + '&background_color=F6F9F8&primary_color=335d57'
  //   });
  // }

  ngOnInit() {
    feather.replace();
    // remove days in the past
    this.currentEvents.forEach((item) => {
      var i = item.classDates.length;
      while (i--) {
        var d: Date = new Date(item.classDates[i]);
        let h: number = item.time.getHours();
        d.setHours(h); //needed to not get filtered out until event time
        if (d < new Date()) {
          item.classDates.splice(i, 1);
        }
      }
    });

    // for every class and then for every date of those classes, push details and dates to new list
    this.currentEvents.forEach((singleClass) => {
      singleClass.classDates.forEach((eventDate) => {
        let d: Date = new Date(eventDate);
        let hours = singleClass.time.getHours();
        let minutes = singleClass.time.getMinutes();
        d.setHours(hours);
        d.setMinutes(minutes);
        this.upcomingEvents.push({ details: singleClass, date: d });
      });
    });

    // sort events chronologically
    this.upcomingEvents.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}

