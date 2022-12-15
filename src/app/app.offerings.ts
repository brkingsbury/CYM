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
  url?: string;
  calendlyUrl?: string;
  comingSoon?: boolean;
  classDates: string[];
}

export const currentOfferings: Offerings[] = [
  // {
  //   name: 'Yoga with Your Little',
  //   type: 'Class',
  //   description: 'Come practice connecting with your little one (ages 3-7) in this 45 minute yoga class. This class will combine yoga poses (asana), breathing practices (pranayama), and fun games/activities to help children and adults cultivate mindful awareness, emotion regulation strategies, and a sense of joy and gratitude for each other!',
  //   time: 9,
  //   occurance: 'New classes coming soon',
  //   length: '45min',
  //   price: '18 (for 1 adult & 1 child)',
  //   color: 'green',
  //   location: 'Integrative Wellness - Bay View',
  //   address: '3201 S Howell Ave, Milwaukee, WI 53207',
  //   addressUrl: 'https://goo.gl/maps/hQvrdqHATAmkGB8H7',
  //   picture: '../assets/ywl_1.jpg',
  //   altText: "An adult and child doing yoga together",
  //   signUp: false,
  //   calendlyUrl: 'https://calendly.com/cultivateyogamke/yogawithyourlittle',
  //   url: '',
  //   comingSoon: true,
  //   classDates: [] = [
  //     // '10/15/2022'
  //   ]
  // },
  // {
  //   name: 'Yoga for Parents + Caregivers',
  //   type: 'Class',
  //   description: "A yoga class that you can bring your kid to! All levels are welcome to this class that will focus on self-care and themes around parenting / caregiving. Classes will be geared toward the adults while the little ones can watch and follow along by your side or play with quiet toys." + "\n\n" + " Perfect for stay-at-home parents looking for a space to practice together and meet other parents. Guardians and caregivers of all types are welcome. We will use distractions by the kids as an opportunity to practice mindfulness and understanding. No limit for age or number of kids. A few quiet toys will be provided, but feel free to bring your own as well. Let's practice letting go and enjoy our yoga practice in community!",
  //   time: 9,
  //   occurance: 'Every Friday',
  //   length: '45min',
  //   price: '15 (for 1 adult & children)',
  //   color: 'orange',
  //   location: 'The Heart Revival Center - St Francis',
  //   address: '3701 S Packard Ave, St Francis, WI 53235',
  //   addressUrl: 'https://goo.gl/maps/QuWPrgYKRTf54QGy7',
  //   picture: '../assets/y4p.jpg',
  //   altText: "An adult doing yoga with a toddler crawling underneath",
  //   signUp: false,
  //   calendlyUrl: 'https://calendly.com/cultivateyogamke/yogaforparents',
  //   url: '',
  //   comingSoon: true,
  //   classDates: [] = []
  // },
  {
    name: "Yoga Together",
    type: 'Class',
    ages: '2 - 6',
    description: "A free yoga class for little ones ages 2-6 and their parent/caregiver! In each class we'll play with using the tools of yoga to practice skills like identifying feelings, emotion regulation, cooperation, and more. Each class will combine yoga poses (asana) and breathing practices (pranayama) with fun games and activities to help us learn and grow together. We will also take time to build community and make connections with the other kids and caregivers who attend. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!" + "\n\n" + "No registration necessary - feel free to drop in!",
    length: '1hr',
    time: 10,
    occurance: 'Last one! December 28th',
    price: 'FREE',
    color: 'gold',
    location: "Bay View Community Center",
    address: '1320 E Oklahoma Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/q7uMKQ7ZEjmWigD66',
    picture: '../assets/bvcc.jpg',
    altText: 'A group of parents and their children doing yoga in a circle',
    signUp: false,
    learnMore: true,
    url: '',
    classDates: [] = [
      '10/12/2022',
      '10/26/2022',
      '11/09/2022',
      '11/23/2022',
      '12/14/2022',
      '12/28/2022'
    ]
  },
  {
    name: 'Kids Yoga',
    type: 'Class',
    ages: '8 - 11',
    description: "In this class, kids ages 8-11 have the opportunity to practice mindfulness and other social-emotional skills while stretching and strengthening their bodies. Each class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help kids strengthen physical and emotional skills alike. No prior experience is necessary - all are welcome to join us as we work on building confidence, appreciating our unique gifts, and fostering connection." + "\n\n" + "No registration necessary - feel free to drop in!",
    time: 9,
    occurance: 'Saturdays',
    length: '1 hour',
    price: 'Free',
    color: 'green',
    location: "Bay View Community Center",
    address: '1320 E Oklahoma Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/q7uMKQ7ZEjmWigD66',
    picture: '../assets/yb.jpg',
    altText: "An adult and child doing yoga together",
    signUp: false,
    learnMore: true,
    url: '',
    classDates: [] = [
      '01/07/2023',
      '01/14/2023',
      '01/21/2023',
      '01/28/2023',
      '02/04/2023',
      '02/11/2023'
    ]
  },
  
  {
    name: 'Family Mindfulness Time',
    type: 'Class',
    ages: '0 - 6',
    description: "A drop-in hour of mindfulness activities for little ones ages 6 and under and their parents/caregivers! We'll use the tools of yoga and mindfulness to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. We will also take time to build community and make connections with each other. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!" + "\n\n" + "No registration necessary - feel free to drop in!",
    time: 11,
    occurance: '2nd & 4th Wednesdays',
    length: '1 hour',
    price: 'Free',
    color: 'mint',
    location: "Bay View Community Center",
    address: '1320 E Oklahoma Ave, Milwaukee, WI 53207',
    addressUrl: 'https://goo.gl/maps/q7uMKQ7ZEjmWigD66',
    picture: '../assets/bvcc.jpg',
    altText: "An adult and child doing yoga together",
    signUp: false,
    learnMore: true,
    url: '',
    classDates: [] = [
      '01/11/2023',
      '01/25/2023',
      '02/08/2023',
      '02/22/2023',
      '03/08/2023',
      '03/22/2023',
      '04/12/2023',
      '04/26/2023'
    ]
  },
  {
    name: "Yoga for Kids",
    type: 'Class',
    ages: '7-11',
    description: 'In this class, kids ages 7-11 have the opportunity to practice mindfulness and other social-emotional skills while stretching and strengthening their bodies. This class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help kids strengthen physical and emotional skills alike. No prior experience is necessary - all are welcome to join us as we work on building confidence, appreciating our unique gifts, and fostering connection.',
    occurance: '12/27 (Brookfield) & 01/14 (Milwaukee)',
    length: '45min',
    time: 11,
    price: '15 for Adventure Rock Members, 20 for Non-Members',
    color: 'orange',
    location: "Adventure Rock - Brookfield",
    signUp: true,
    learnMore: false,
    url: 'https://adventurerock.com/yoga/catalog/brookfield/',
    picture: '../assets/kids_yoga_1.jpg',
    altText: "Children doing yoga",
    classDates: [] = [
      '12/27/2022'
    ]
  },
  {
    name: "Yoga for Kids",
    type: 'Workshop',
    ages: '7-11',
    length: '45min',
    time: 11,
    price: '15 for Adventure Rock Members, 20 for Non-Members',
    color: 'orange',
    location: "Adventure Rock - Milwaukee",
    signUp: true,
    learnMore: false,
    url: 'https://adventurerock.com/yoga/catalog/milwaukee/',
    classDates: [] = [
      '01/14/2023'
    ]
  }
  // {
  //   name: "Yoga Buddies",
  //   type: 'Series',
  //   description: "This is a space for little ones, ages 2-5 and one caregiver to practice yoga together. Using the tools of yoga, we will practice skills to handle big feelings. Each class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help us learn and grow together. Have fun while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!",
  //   length: '45min',
  //   time: 16,
  //   occurance: 'Starts January 23rd',
  //   price: '30 for Milwaukee residents, 46 for non-residents',
  //   color: 'mint',
  //   location: "Beulah Brinton Community Center",
  //   address: '2555 S Bay St, Milwaukee, WI 53207',
  //   addressUrl: 'https://goo.gl/maps/SsE58GLLf9pQC2MFA',
  //   picture: '../assets/yb.jpg',
  //   altText: "An adult and child doing yoga together",
  //   signUp: false,
  //   learnMore: true,
  //   url: 'https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=8753b73fee1c2001d2ec2ef446fa5643296e8e5a1d44a55ab30691d4033bf3c9&module=global&keyword=yoga+buddies&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=3&multiselectlist_value=&globalwebsearch_buttonsearch=yes',
  //   classDates: [] = [
  //     '01/23/2023'
  //   ]
  // }
]