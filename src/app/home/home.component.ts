import { OnInit, Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { currentOfferings } from '../app.offerings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentEvents = currentOfferings;
  public upcomingEvents: any = [];

  calendly(event: any) {
    const month = formatDate(event.date, 'yyyy-MM', 'en-US');
    window.Calendly.initPopupWidget({
      url: event.details.calendlyUrl + '?hide_gdpr_banner=1&back=1&month=' + month + '&date=' + event.date
      // url: event.details.calendlyUrl
    });
  }

  ngOnInit() {
    // remove days in the past
    this.currentEvents.forEach((item) => {
      item.classDates.forEach((val, index) => {
        if (new Date(val) < new Date()) item.classDates.splice(index, 1);
      });
    });

    // for every class and then for every date of those classes, push details and dates to new lists
    this.currentEvents.forEach((singleClass) => {
      singleClass.classDates.forEach((eventDate, i) => {
        this.upcomingEvents.push({ details: singleClass, date: eventDate });
      });
    });

    // sort events chronologically
    this.upcomingEvents.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }
}

