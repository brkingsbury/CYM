export interface Offerings {
  name: string;
  type: string;
  ages: string;
  description?: string;
  time: Date;
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
  // {
  //   name: 'Family Mindfulness Time',
  //   type: 'Class',
  //   ages: '0 - 6',
  //   description: "A drop-in hour of mindfulness activities for little ones ages 6 and under and their parents/caregivers! We'll use the tools of yoga and mindfulness to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. We will also take time to build community and make connections with each other. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life!" + "\n\n" + "No registration necessary - feel free to drop in!" + "\n\n" + "We are currently meeting in Humboldt Park near the corner of Pine and Montana, check social media for any weather updates or cancellations.",
  //   time: new Date("2025-01-01 11:00"),
  //   occurance: '2nd & 4th Wednesdays',
  //   length: '1 hour',
  //   price: 'FREE!',
  //   color: 'mint',
  //   location: "Bay View Community Center",
  //   address: '1320 E Oklahoma Ave, Milwaukee, WI 53207',
  //   addressUrl: 'https://maps.app.goo.gl/edkUAbetnnQ3TMP67',
  //   picture: '../assets/class-photos/mindfulness.jpg',
  //   altText: "A group of adults and children on yoga mats",
  //   signUp: false,
  //   dropIn: true,
  //   url: '',
  //   classDates: [] = [
  //     '01/10/2024',
  //     '01/24/2024',
  //     '02/14/2024',
  //     '02/28/2024',
  //     '03/13/2024',
  //     '03/27/2024',
  //     '04/10/2024',
  //     '04/24/2024',
  //     '05/08/2024',
  //     '05/22/2024'
  //   ]
  // },
  // {
  //   name: "Mindful Mondays",
  //   type: 'Class',
  //   ages: '0-6',
  //   description: "This class is for kids of all ages – parents/caregivers are encouraged to join as well! Each class will combine a variety of yoga poses, meditation and mindfulness practices, games, and activities to help us learn and grow together. This event will be held outdoors in Museum Center Park, weather-permitting. Participants are encouraged to bring yoga mats or blankets, sunscreen, and water.",
  //   length: '45min',
  //   occurance: 'Every Monday',
  //   time: new Date("2025-01-01 10:00"),
  //   price: 'Free, for members',
  //   color: 'orange',
  //   location: "Betty Brinn Children's Museum",
  //   address: '929 E Wisconsin Ave, Milwaukee, WI 53202',
  //   addressUrl: 'https://goo.gl/maps/3u9n7Ga11LUdnZpcA',
  //   signUp: true,
  //   learnMore: true,
  //   noLink: false,
  //   url: 'https://bbcmkids.ticketing.veevartapp.com/tickets/view/list?firstevent=membersonly-mindful-monday',
  //   picture: '../assets/class-photos/bb_y4families.jpg',
  //   altText: "An adult doing yoga outside",
  //   classDates: [] = [
  //     '06/17/2024',
  //     '06/24/2024',
  //     '07/01/2024',
  //     '07/08/2024',
  //     '07/22/2024',
  //     '07/29/2024',
  //     '08/05/2024',
  //     '08/12/2024'
      
  //   ]
  // },
  {
    name: "Family Yoga",
    ages: 'all ages',
    type: 'Class',
    description: "Kids of all ages are invited to practice alongside their adult in this class centered on connecting with our bodies, breath, and with each other. Each class will combine yoga poses, breathing practices, and mindfulness meditation with fun games, activities, stories, and/or crafts. Practicing together, kids and adults alike will work on growing skills like balance, focus, and gratitude. No prior experience is necessary - all ages and abilities are welcome. Mats are available to borrow.",
    length: '1 hour',
    time: new Date("2025-01-01 16:30"),
    occurance: '2nd Wednesdays',
    price: '$20 for nonmembers, free for members',
    color: 'green',
    location: "Adventure Rock - MKE",
    address: '2220 N Commerce St, Milwaukee, WI 53212',
    addressUrl: 'https://maps.app.goo.gl/bLxLojJDzW1EQFNF6',
    picture: '../assets/class-photos/ywl_1.jpg',
    altText: "Kids doing yoga",
    signUp: true,
    dropIn: false,
    url: 'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=c08634b933d345eaab99e85e3b7858d3&random=65072821480c7&iframeid=&mode=p',
    classDates: [] = [
      '06/12/2024',
      '07/10/2024',
      '08/14/2024',
      '09/11/2024',
      // '10/09/2024',
      // '11/13/2024',
      // '12/11/2024'

    ]
  },
  {
    name: "Family Yoga",
    ages: '5 and under',
    type: 'Class',
    description: "Yoga and mindfulness activities for little ones and their parents/caregivers! We'll use the tools of yoga to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life! Please bring mats if you have them.",
    length: '1 hour',
    time: new Date("2025-01-01 10:45"),
    // occurance: '2nd Wednesdays',
    price: 'Free',
    color: 'gold',
    location: "Tippecanoe Library",
    address: '3912 S Howell Ave, Milwaukee, WI 53207',
    addressUrl: 'https://maps.app.goo.gl/vszkqE6Wmf86zsyM6',
      picture: '../assets/class-photos/mindfulness.jpg',
      altText: "A group of adults and children on yoga mats",
    signUp: false,
    dropIn: true,
    url: 'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=c08634b933d345eaab99e85e3b7858d3&random=65072821480c7&iframeid=&mode=p',
    classDates: [] = [
      '08/21/2024',
      '08/28/2024',
    ]
  }, 
  {
    name: "Family Yoga",
    ages: '7 and under',
    type: 'popup',
    description: "Yoga and mindfulness activities for little ones and their parents/caregivers! We'll use the tools of yoga to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life! Please bring mats if you have them.",
    length: '1 hour',
    time: new Date("2025-01-01 10:30"),
    // occurance: '2nd Wednesdays',
    price: 'Free',
    color: 'gold',
    location: "Tippecanoe Library",
    address: '3912 S Howell Ave, Milwaukee, WI 53207',
    addressUrl: 'https://maps.app.goo.gl/vszkqE6Wmf86zsyM6',
      picture: '../assets/class-photos/mindfulness.jpg',
      altText: "A group of adults and children on yoga mats",
    signUp: false,
    dropIn: true,
    url: 'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=c08634b933d345eaab99e85e3b7858d3&random=65072821480c7&iframeid=&mode=p',
    classDates: [] = [
      '09/27/2024',
    ]
  }, 
  
  {
    name: "Family Yoga",
    ages: '7 and under',
    type: 'popup',
    description: "Yoga and mindfulness activities for little ones and their parents/caregivers! We'll use the tools of yoga to practice skills like connecting with our bodies and feelings, strategies for emotion regulation, and ways to bond and connect with your child. Each class will combine a variety of games, activities, physical yoga poses, meditation and mindfulness techniques, stories, and crafts to help us learn and grow together. Come have fun and make friends while deepening your relationship and gaining new tools to handle the ups and downs of toddler and preschool life! Please bring mats if you have them.",
    length: '1 hour',
    time: new Date("2025-01-01 10:00"),
    // occurance: '2nd Wednesdays',
    price: 'Free',
    color: 'gold',
    location: "Tippecanoe Library",
    address: '3912 S Howell Ave, Milwaukee, WI 53207',
    addressUrl: 'https://maps.app.goo.gl/vszkqE6Wmf86zsyM6',
      picture: '../assets/class-photos/mindfulness.jpg',
      altText: "A group of adults and children on yoga mats",
    signUp: false,
    dropIn: true,
    url: 'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=c08634b933d345eaab99e85e3b7858d3&random=65072821480c7&iframeid=&mode=p',
    classDates: [] = [
      '10/12/2024',
    ]
  },
  // {
  //   name: "Family Yoga",
  //   ages: 'all ages',
  //   type: 'Class',
  //   description: "Kids of all ages are invited to practice alongside their adult in this class centered on connecting with our bodies, breath, and with each other. Each class will combine yoga poses, breathing practices, and mindfulness meditation with fun games, activities, stories, and/or crafts. Practicing together, kids and adults alike will work on growing skills like balance, focus, and gratitude. No prior experience is necessary - all ages and abilities are welcome. Mats are available to borrow." + "\n\n" + "Holly will be joined by her 2-year-old assistant for this class.",
  //   length: '1 hour',
  //   time: new Date("2024-01-01 10:00"),
  //   occurance: 'Every Friday',
  //   price: '$20 for nonmembers, free for members',
  //   color: 'green',
  //   location: "Adventure Rock - Walkers Point",
  //   address: '613 S 2nd St, Milwaukee, WI 53204',
  //   addressUrl: 'https://maps.app.goo.gl/Eafn4TM7tAJD14XL8',
  //   picture: '../assets/class-photos/ywl_1.jpg',
  //   altText: "Kids doing yoga",
  //   signUp: true,
  //   dropIn: false,
  //   url: 'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=984204997028446db1b1ca71cb9afc0e&widget_guid=4f332c2cec984f60a8ea3b307fa0c1b7&random=650727182521f&iframeid=&mode=p',
  //   classDates: [] = [
  //     '10/06/2023',
  //     '10/13/2023',
  //     '10/20/2023',
  //     '10/27/2023',
  //     '11/03/2023',
  //     '11/10/2023',
  //     '11/17/2023',
  //     '11/24/2023',
  //     '12/01/2023',
  //     '12/08/2023'
  //   ]
  // },
  // {
  //   name: "Yoga Together",
  //   ages: '2-6',
  //   type: 'Event',
  //   description: "Join Holly from Cultivate Yoga MKE in this class designed for little ones ages 2 to 6 and their parents/caregivers at Healium Hot Yoga on Sunday August 20th from 3:30-4:30 pm! Kids and their grown-ups will use physical poses, mindfulness practices, and games and activities to practice connecting with their bodies, breath, and with each other. " + "\n\n" + "Each child must attend with at least one adult. $15 per child. Adults are welcome to attend with multiple children - please email info@healiumhotyoga.com to arrange for additional child sign-up and payment. ",
  //   length: '1 hour',
  //   time: new Date("2025-03-24 15:30"),
  //   occurance: 'Once',
  //   price: '$15 per child',
  //   color: 'gold',
  //   location: "Healium Hot Yoga",
  //   address: '2534 S Kinnickinnic Ave, Milwaukee, WI 53207',
  //   addressUrl: 'https://goo.gl/maps/zj45aJbkE4VAWBcHA',
  //   picture: '../assets/class-photos/y4p.jpg',
  //   altText: "Kids doing yoga",
  //   signUp: true,
  //   dropIn: false,
  //   url: 'https://www.healiumhotyoga.com/happenings/yogatogethermarch',
  //   classDates: [] = [
  //     '03/24/2024'
  //   ]
  // },
  {
    name: "Yoga for Kids",
    ages: '7-11',
    type: 'Class',
    description: "This class provides an opportunity for kids to move their bodies, release some energy, and relax their minds after a long day of learning at school! Each class will combine yoga poses (asana) and breathing techniques (pranayama) with fun games and activities to help kids strengthen physical and emotional skills alike. No prior experience is necessary - all are welcome to join us as we work on building confidence, appreciating our unique gifts, and fostering connection. Class is for kids only.",
    length: '1 hour',
    time: new Date("2026-01-01 16:45"),
    occurance: 'Mondays starting 12/02',
    price: '$13 for residents / $20 for non-residents',
    color: 'orange',
    location: "Beulah Brinton Community Center",
    address: '2555 S Bay St, Milwaukee, WI 53207',
    addressUrl: 'https://maps.app.goo.gl/pBxFA38uXFcSZLAj8',
    picture: '../assets/class-photos/y4k.png',
    altText: "Kids doing yoga",
    signUp: true,
    dropIn: false,
    url: 'https://web2.myvscloud.com/wbwsc/wimilwaukeewt.wsc/search.html?Action=Start&SubAction=&_csrf_token=58dc32e4f06736bec4c9a41fb20eeec51ed43e8a77f5a1084276da77b594ed8e&module=global&keyword=Yoga+for+Kids&keywordoption=Match+All&spotsavailable=&dayoption=All&timeblock=&beginyear=&display=Detail&search=yes&page=1&multiselectlist_value=&globalwebsearch_buttonsearch=yes',
    classDates: [] = [
      '12/02/2024',
    ]
  }
]