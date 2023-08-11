export interface Offerings {
  name: string;
  type: string;
  ages: string;
  description?: string;
  time: number;
  occurance?: string;
  length: string;
  price: string;
  color: string;
  location: string;
  address?: string;
  addressUrl?: string;
  picture?: string;
  altText?: string;
  signUp: boolean;
  learnMore?: boolean;
  dropIn?: boolean;
  url?: string;
  calendlyUrl?: string;
  comingSoon?: boolean;
  classDates: string[];
  noLink?: boolean;
}

export const currentOfferings: Offerings[] = [
  {
    name: 'Family Mindfulness Time',
    type: 'Class',
    ages: '0 - 6',
    description: "A drop-in hour of mindfulness activities for little ones ages 6 and under and their parents/caregivers! We'll use the tools of yoga and mindfulness to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. We will also take time to build community and make connections with each other. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!" + "\n\n" + "No registration necessary - feel free to drop in!" + "\n\n" + "We are currently meeting in Humboldt Park near the corner of Pine and Montana, check social media for any weather updates or cancellations.",
    time: 11,
    occurance: '2nd & 4th Wednesdays',
    length: '1 hour',
    price: 'FREE!',
    color: 'mint',
    location: "Humboldt Park",
    address: '3000 S Howell Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/saTezqXGuRyEWW818',
    picture: '../assets/mindfulness.jpg',
    altText: "A group of adults and children on yoga mats",
    signUp: false,
    dropIn: true,
    url: '',
    classDates: [] = [
      '04/26/2023',
      '05/10/2023',
      '06/14/2023',
      '06/28/2023',
      '07/12/2023',
      '07/26/2023',
      '08/09/2023',
      '08/23/2023'
    ]
  },
  {
    name: "Mindful Mondays",
    type: 'Class',
    ages: 'all',
    description: "This class is for kids of all ages – parents/caregivers are welcome to join as well! Each class will combine a variety of yoga poses, meditation and mindfulness practices, games, and activities to help us learn and grow together."
      + "\n\n" + "This event will be held in Museum Center Park, weather-permitting. Participants are encouraged to bring yoga mats or blankets, sunscreen, and water." + "\n\n" + "This program is $2 for Museum members and $4 for guests. Preregistration is suggested as limited spots are available if the class is moved indoors. ",
    occurance: 'Select days',
    length: '45min',
    time: 10,
    price: '$2 for Museum Members, $4 for guests',
    color: 'orange',
    location: "Betty Brinn Children's Museum",
    address: '929 E Wisconsin Ave, Milwaukee, WI 53202',
    addressUrl: 'https://goo.gl/maps/3u9n7Ga11LUdnZpcA',
    signUp: true,
    learnMore: true,
    noLink: false,
    url: 'https://bbcmkids.ticketing.veevartapp.com/tickets/view/list?firstevent=mindful-monday',
    picture: '../assets/bb_outdoor.jpg',
    altText: "An adult doing yoga outside",
    classDates: [] = [
      '06/19/2023',
      '06/26/2023',
      '07/03/2023',
      '07/10/2023',
      '07/17/2023',
      '07/24/2023',
      '07/31/2023',
      '08/07/2023',
      '08/14/2023',
      '08/21/2023',
      '08/28/2023'

    ]
  },
  {
    name: "Yoga in the Park for Kids",
    ages: '5+',
    type: 'Class',
    description: "A free, outdoor, kids yoga practice. Students will use poses, mindfulness practices, games and activities to connect with their bodies, breath, and the natural world." + "\n\n" + "Parents & caregivers are welcome to participate. Dress for the weather and bring a mat or blanket to practice on if you can. Class is designed for kids ages 5 and up, but younger kids are welcome to attend!",
    length: '45min',
    time: 10,
    occurance: 'Jul 29th & August 17th',
    price: 'FREE',
    color: 'gold',
    location: "Havenwoods State Forest",
    address: '6141 N Hopkins St. Milwaukee, WI 53209',
    addressUrl: 'https://goo.gl/maps/Pdufz6DJz7SNCjAW6',
    picture: '../assets/y4p.jpg',
    altText: "Kids doing yoga",
    signUp: false,
    dropIn: true,
    url: 'https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=58dc32e4f06736bec4c9a41fb20eeec51ed43e8a77f5a1084276da77b594ed8e&module=global&keyword=Yoga+for+Kids&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=1&multiselectlist_value=&globalwebsearch_buttonsearch=yes',
    classDates: [] = [
      '07/29/2023',
      '08/17/2023'
    ]
  },
  {
    name: "Kids Yoga in the Garden",
    ages: 'all',
    type: 'Event',
    description: "Join us in the garden for a yoga class for kids of all ages! In this 45 minute session, we'll use the beautiful surroundings of the garden and the tools of yoga to practice connecting with the breath, the body, and with nature." + "\n\n" + "Adults are welcome to practice alongside their little ones or watch from the sidelines - whatever is most comfortable for you. Feel free to bring a mat (or 2) or blanket to practice on... or just practice on the grass if you prefer!",
    length: '45min',
    time: 10,
    occurance: 'Once',
    price: 'FREE',
    color: 'gold',
    location: "Alice's Garden",
    address: '2136 N 21st St, Milwaukee, WI 53205',
    addressUrl: 'https://goo.gl/maps/TjpgYBG1mbgDDyPv6',
    picture: '../assets/y4p.jpg',
    altText: "Kids doing yoga",
    signUp: false,
    dropIn: true,
    url: 'https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=58dc32e4f06736bec4c9a41fb20eeec51ed43e8a77f5a1084276da77b594ed8e&module=global&keyword=Yoga+for+Kids&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=1&multiselectlist_value=&globalwebsearch_buttonsearch=yes',
    classDates: [] = [
      '08/12/2023'
    ]
  },
  {
    name: "Big Kids Yoga",
    ages: '7-11',
    type: 'Event',
    description: "This class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help kids strengthen physical and emotional skills alike. No prior experience is necessary - all are welcome to join us as we work on building confidence, appreciating our unique gifts, and fostering connection.",
    length: '1 hour',
    time: 9,
    occurance: 'Once',
    price: '$10 / kid',
    color: 'green',
    location: "Healium Hot Yoga",
    address: '2534 S Kinnickinnic Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/zj45aJbkE4VAWBcHA',
    picture: '../assets/y4p.jpg',
    altText: "Kids doing yoga",
    signUp: true,
    dropIn: false,
    url: 'https://www.healiumhotyoga.com/schedule',
    classDates: [] = [
      '08/19/2023'
    ]
  },
  {
    name: "Yoga Together",
    ages: '2-6',
    type: 'Event',
    description: "Join Holly from Cultivate Yoga MKE in this class designed for little ones ages 2 to 6 and their parents/caregivers at Healium Hot Yoga on Sunday August 20th from 3:30-4:30 pm! Kids and their grown-ups will use physical poses, mindfulness practices, and games and activities to practice connecting with their bodies, breath, and with each other. " + "\n\n" + "Each child must attend with at least one adult. $15 per child. Adults are welcome to attend with multiple children - please email info@healiumhotyoga.com to arrange for additional child sign-up and payment. ",
    length: '1 hour',
    time: 15.5,
    occurance: 'Once',
    price: '$15 per child',
    color: 'gold',
    location: "Healium Hot Yoga",
    address: '2534 S Kinnickinnic Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/zj45aJbkE4VAWBcHA',
    picture: '../assets/y4p.jpg',
    altText: "Kids doing yoga",
    signUp: true,
    dropIn: false,
    url: 'https://www.healiumhotyoga.com/schedule',
    classDates: [] = [
      '08/20/2023'
    ]
  }
]