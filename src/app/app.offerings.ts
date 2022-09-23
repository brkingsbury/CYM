export interface Offerings {
  name: string;
  type: string;
  description: string;
  time: string;
  occurance: string;
  length: string;
  price: string;
  color: string;
  location: string;
  address: string;
  addressUrl: string;
  picture: string;
  altText: string;
  signUp: boolean;
  url?: string;
  calendlyUrl?: string;
  classDates: string[];
}

export const currentOfferings: Offerings[] = [
  {
    name: 'Yoga with Your Little',
    type: 'Class',
    description: 'Come practice connecting with your little one (ages 3-7) in this 45 minute yoga class. This class will combine yoga poses (asana), breathing practices (pranayama), and fun games/activities to help children and adults cultivate mindful awareness, emotion regulation strategies, and a sense of joy and gratitude for each other!',
    time: '9am',
    occurance: 'Every other Saturday',
    length: '45min',
    price: '18 (for 1 adult & 1 child)',
    color: 'green',
    location: 'Integrative Wellness - Bay View',
    address: '3201 S Howell Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/hQvrdqHATAmkGB8H7',
    picture: '../assets/ywl_1.jpg',
    altText: "An adult and child doing yoga together",
    signUp: true,
    calendlyUrl: 'https://calendly.com/cultivateyogamke/yogawithyourlittle',
    classDates: [] = [
      '10/01/2022',
      '10/15/2022',
      '10/29/2022'
    ]
  },
  {
    name: 'Yoga for Parents + Caregivers',
    type: 'Class',
    description: "A yoga class that you can bring your kid to! All levels are welcome to this class that will focus on self-care and themes around parenting / caregiving. Classes will be geared toward the adults while the little ones can watch and follow along by your side or play with quiet toys." + "\n\n" + " Perfect for stay-at-home parents looking for a space to practice together and meet other parents. Guardians and caregivers of all types are welcome. We will use distractions by the kids as an opportunity to practice mindfulness and understanding. No limit for age or number of kids. A few quiet toys will be provided, but feel free to bring your own as well. Let's practice letting go and enjoy our yoga practice in community!",
    time: '9am',
    occurance: 'Every Friday',
    length: '45min',
    price: '15 (for 1 adult & children)',
    color: 'orange',
    location: 'The Heart Revival Center - St Francis',
    address: '3701 S Packard Ave, St Francis, WI 53235',
    addressUrl: 'https://goo.gl/maps/QuWPrgYKRTf54QGy7',
    picture: '../assets/y4p.jpg',
    altText: "An adult doing yoga with a toddler crawling underneath",
    signUp: true,
    calendlyUrl: 'https://calendly.com/cultivateyogamke/yogaforparents',
    classDates: [] = [
      '09/23/2022',
      '09/30/2022',
      '10/07/2022',
      '10/14/2022',
      '10/21/2022',
      '10/28/2022'
    ]
  },
  {
    name: "Kids' Yoga in the Garden",
    type: 'Event',
    description: "Join us in the garden for a yoga class for kids of all ages! In this 45 minute session, we'll use the beautiful surroundings of the garden and the tools of yoga to practice connecting with the breath, the body, and with nature. " + "\n\n" + " Adults are welcome to practice alongside their little ones or watch from the sidelines - whatever is most comfortable for you. Feel free to bring a mat (or 2) or blanket to practice on... or just practice on the grass if you prefer!",
    length: '45min',
    time: '10:30am',
    occurance: 'Sunday September 25th',
    price: 'FREE',
    color: 'gold',
    location: "Alice's Garden Urban Farm",
    address: '2136 N 21st St, Milwaukee, WI 53205',
    addressUrl: 'https://goo.gl/maps/hLGsSQ4BzMjoYNGH6',
    picture: '',
    altText: '',
    signUp: false,
    url: 'https://www.facebook.com/events/3096932107190182/?ref=newsfeed',
    classDates: [] = [
      '09/25/2022'
    ]
  },
  {
    name: "Yoga Buddies",
    type: 'Series',
    description: "This is a space for little ones, ages 2-5 and one caregiver to practice yoga together. Using the tools of yoga, we will practice skills to handle big feelings. Each class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help us learn and grow together. Have fun while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!",
    length: '45min',
    time: '4:00pm',
    occurance: 'Starts November 14th',
    price: '30 for Milwaukee residents, 46 for non-residents',
    color: 'mint',
    location: "Beulah Brinton Community Center",
    address: '2555 S Bay St, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/SsE58GLLf9pQC2MFA',
    picture: '../assets/yb.jpg',
    altText: "An adult and child doing yoga together",
    signUp: false,
    url: 'https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=8753b73fee1c2001d2ec2ef446fa5643296e8e5a1d44a55ab30691d4033bf3c9&module=global&keyword=yoga+buddies&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=3&multiselectlist_value=&globalwebsearch_buttonsearch=yes',
    classDates: [] = [
      '11/14/2022'
    ]
  }
]