import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // public comingClasses = [
  //   {
  //     className: 'Yoga with Your Little',
  //     classTime: '9am',
  //     location: 'Integrative Wellness - Bay View',
  //     classDates: [
  //       '09/17/2022',
  //       '10/01/2022',
  //       '08/18/2022', //test
  //       '10/15/2022',
  //       '10/29/2022'
  //     ]
  //   },
  //   {
  //     className: 'Yoga for Parents & Caregivers',
  //     classTime: '9am',
  //     location: 'Heart Revival Center - St Francis',
  //     classDates: [
  //       '09/23/2022',
  //       '09/30/2022',
  //       '10/07/2022',
  //       '08/16/2022', //test
  //       '10/14/2022',
  //       '10/21/2022',
  //       '10/28/2022'
  //     ]
  //   },
  // ]
  public upcomingClasses = [
    { style: 'green', classDate: '09/17/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'green', classDate: '10/15/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
    { style: 'green', classDate: '10/01/2022', className: 'Yoga with Your Little', classTime: '9am', location: 'Integrative Wellness - Bay View', signUp: true, url: "https://calendly.com/cultivateyogamke/yogawithyourlittle" },
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

  calendly(event: any) {
    const month = formatDate(event.classDate, 'yyyy-MM', 'en-US');
    window.Calendly.initPopupWidget({
      url: event.url + '?hide_event_type_details=1&back=1&month=' + month + '&date=' + event.classDate
    });
  }


  // new function to sort comingClass array
  /*
  get newSortedClasses() {
    this.comingClasses.forEach((item) => {
      item.classDates.forEach((val, index) => {
        if (new Date(item.classDates[index]) < new Date()) item.classDates.splice(index, 1);
      });

    });

    return this.comingClasses.forEach((index) => {
      return index.classDates.forEach((item => {
        return item;
      }));
    });
*/
  // return this.comingClasses.sort((a, b) => {
  //   return <any>new Date(a.classDates) - <any>new Date(b.classDates);
  //   return a,b;
  // });


}

