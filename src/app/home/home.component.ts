import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
// import { DatePipe } from '@angular/common';
import { currentOfferings } from '../app.offerings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // currentOfferings = currentOfferings;
  public offerings = currentOfferings;
  public upcomingEvents: any = [];

  // test = currentOfferings;

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
    {
      style: 'gold', classDate: '09/25/2022', className: "Kids' Yoga in the Garden", classTime: '10:30am', location: "Alice's Garden Urban Farm", signUp: false,
      url: "https://www.facebook.com/events/3096932107190182/?ref=newsfeed"
    }
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  removePastDays() {
    console.log('removing past days now');
    this.offerings.forEach((item) => {
      item.classDates.forEach((val, index) => {
        if (new Date(val) < new Date()) item.classDates.splice(index, 1);
      });
    });
  }
  // let newArray = arr.map((currentvalue,index,array)=>{
  //   return Element of array
  //   });

  get filteredOfferings() {
    var x: any = [];
    var y: any = [];
    this.removePastDays();
    this.offerings.forEach((details) => {
      details.classDates.forEach((date, dex) => {
        x.push(details);
        y.push(date);
        // x[dex].classDates = 
        // x[dex].classDates = date;
      // x[dex].classDates = '';
      
      });
    });
    x.forEach((offering: any, index:any) => {
      // console.log('off', offering);
      // console.log('ind', index);
      // console.log('y', y[index]);
      offering.classDates = y[index];
      console.log('x', x);
    });

    return x;
    // return this.upcomingEvents.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
    //   return <any>new Date(a.date) - <any>new Date(b.date);
    // });
  }
}

