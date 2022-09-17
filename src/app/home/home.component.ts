import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public upcomingClasses = [
    { style: 'green', classDate: '09/17/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'green', classDate: '10/15/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'green', classDate: '10/01/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'green', classDate: '10/29/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'orange', classDate: '09/23/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'orange', classDate: '09/30/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'orange', classDate: '10/07/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'orange', classDate: '10/14/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'orange', classDate: '10/21/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'orange', classDate: '10/28/2022', className: 'Yoga for Parents & Caregivers', classTime: '9am', location: 'Heart Revival Center - St Francis', signUp: true, url: "https://calendly.com/cultivateyogamke/yogaforparents" },
    { style: 'gold', classDate: '09/25/2022', className: "Kids' Yoga in the Garden", classTime: '10:30am', location: "Alice's Garden Urban Farm", signUp: false,
    url: "https://www.facebook.com/events/3096932107190182/?ref=newsfeed" }
  ]

  get sortedClasses() {
    // remove dates in the past
    this.upcomingClasses.forEach((item, index) => {
      if (new Date(item.classDate) < new Date()) this.upcomingClasses.splice(index, 1);
    });
    // sort classes by date
    return this.upcomingClasses.sort((a, b) => {
      return <any>new Date(a.classDate) - <any>new Date(b.classDate);
    });
  }
  // use '?hide_event_type_details=1' for only the calendar, no class details
  calendly(event: any) {
    const month = formatDate(event.classDate, 'yyyy-MM', 'en-US');
    window.Calendly.initPopupWidget({
      url: event.url + '?hide_gdpr_banner=1&back=1&month=' + month + '&date=' + event.classDate
    });
  }

}

