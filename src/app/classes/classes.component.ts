import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements AfterViewInit {
  public classes = [
    {
      name: "Yoga with Your Little",
      description: "Come practice connecting with your little one (ages 3-7) in this 45 minute yoga class. This class will combine yoga poses (asana), breathing practices (pranayama), and fun games/activities to help children and adults cultivate mindful awareness, emotion regulation strategies, and a sense of joy and gratitude for each other!",
      color: "green",
      price: "18",
      location: "Integrative Wellness Yoga Shala",
      address: "3201 S Howell Ave, Milwaukee, WI 53207",
      addressURL: "https://goo.gl/maps/hQvrdqHATAmkGB8H7",
      time: "45min",
      picture: "../../assets/ywl_1.jpg",
      url: "https://calendly.com/cultivateyogamke/yogawithyourlittle"
    },
    {
      name: "Yoga for Parents + Caregivers",
      description: "A yoga class that you can bring your kid to! All levels are welcome to this class that will focus on self-care and themes around parenting / caregiving. Classes will be geared toward the adults while the little ones can watch and follow along by your side or play with quiet toys." + "\n\n" + " Perfect for stay-at-home parents looking for a space to practice together and meet other parents. Guardians and caregivers of all types are welcome. We will use distractions by the kids as an opportunity to practice mindfulness and understanding. No limit for age or number of kids. A few quiet toys will be provided, but feel free to bring your own as well. Let's practice letting go and enjoy our yoga practice in community!",
      color: "orange",
      price: "15",
      location: "The Heart Revival Center for Yoga and Buddhist Studies",
      address: "3701 S Packard Ave, St Francis, WI 53235",
      addressURL: "https://goo.gl/maps/QuWPrgYKRTf54QGy7",
      time: "45min",
      picture: "../../assets/y4p_1.jpg",
      url: "https://calendly.com/cultivateyogamke/yogaforparents"
    },
    {
      name: "Kids' Yoga in the Garden",
      description: "Join us in the garden for a yoga class for kids of all ages! In this 45 minute session, we'll use the beautiful surroundings of the garden and the tools of yoga to practice connecting with the breath, the body, and with nature. " + "\n\n" + " Adults are welcome to practice alongside their little ones or watch from the sidelines - whatever is most comfortable for you. Feel free to bring a mat (or 2) or blanket to practice on... or just practice on the grass if you prefer!",
      color: "gold",
      price: "FREE",
      location: "Alice's Garden Urban Farm",
      address: "2136 N 21st St, Milwaukee, WI 53205",
      addressURL: "https://goo.gl/maps/hLGsSQ4BzMjoYNGH6",
      time: "10:30am",
      picture: "",
      url: "https://www.facebook.com/events/3096932107190182/?ref=newsfeed"
    },
    {
      name: "Yoga Buddies",
      description: "This is a space for little ones, ages 2-5 and one caregiver to practice yoga together. Using the tools of yoga, we will practice skills to handle big feelings. Each class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help us learn and grow together. Have fun while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!",
      color: "mint",
      price: "15 for Milwaukee residents, 23 for non-residents",
      location: "Beulah Brinton Community Center",
      address: "2555 S Bay St, Milwaukee, WI 53207",
      addressURL: "https://goo.gl/maps/SsE58GLLf9pQC2MFA",
      time: "",
      picture: "../../assets/yb_1.jpg",
      url: "https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=8753b73fee1c2001d2ec2ef446fa5643296e8e5a1d44a55ab30691d4033bf3c9&module=global&keyword=yoga+buddies&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=3&multiselectlist_value=&globalwebsearch_buttonsearch=yes"
    }
  ];
  
  ngAfterViewInit() {
    feather.replace();
  }
}
