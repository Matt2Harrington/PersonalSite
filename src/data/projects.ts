export interface AppSection {
  title: string;
  paragraphs: string[];
  image?: string;
  video?: string;
}

export interface AppProject {
  type: 'app';
  title: string;
  slug: string;
  description: string;
  icon: string;
  coverImage: string;
  backgroundVideo: string;
  appStoreUrl?: string;
  feedbackEmail: string;
  order: number;
  sections: AppSection[];
}

export interface PhotoProject {
  type: 'photography';
  title: string;
  slug: string;
  backgroundVideo: string;
  order: number;
}

export type Project = AppProject | PhotoProject;

export const appProjects: AppProject[] = [
  {
    type: 'app',
    title: 'Pollster Pass',
    slug: 'pollster-pass',
    description: 'Quickly view the latest polling information and trends to keep you in the know!',
    icon: '/images/apps/pollsterpass/icon.png',
    coverImage: '/images/apps/pollsterpass/websiteLatest.png',
    backgroundVideo: '/videos/ppBackground.mov',
    feedbackEmail: 'matt2harrington@gmail.com',
    order: 1,
    sections: [
      {
        title: 'Polling',
        paragraphs: [
          'Pollster Pass allows you to quickly view the latest polling information and trends to keep you in the know!',
          'View the latest polls.',
          'Stay informed with the latest in polling information.',
          'The latest subjects and polling topics important to you.',
        ],
        image: '/images/apps/pollsterpass/websiteLatest.png',
      },
      {
        title: 'Info',
        paragraphs: [
          'Filter by many subjects, pollsters or date range.',
          'Share Polls with friends.',
          "View poll's website publishment right in the app.",
        ],
        image: '/images/apps/pollsterpass/websiteInfo.png',
      },
      {
        title: 'Trends',
        paragraphs: [
          'View polling trends over time with the Charts view',
          'Mutiple subjects over a six month period.',
          'More to be added over time!',
        ],
        image: '/images/apps/pollsterpass/websiteCharts.png',
      },
      {
        title: 'Coming Soon',
        paragraphs: [
          'So much more to come soon including:',
          'Widgets',
          'Enhanced Charts',
          'More Polling Data as it becomes available!',
        ],
        image: '/images/apps/pollsterpass/websiteSearch.png',
      },
      {
        title: 'Privacy Policy',
        paragraphs: [
          "Pollster Pass and it's developer take your privacy very seriously. No information is stored in Pollster Pass and users are not tracked in any way! Pollster Pass accesses and only stores polling data from its polling source, with no data collection from the user.",
        ],
        image: '/images/apps/pollsterpass/icon.png',
      },
    ],
  },
  {
    type: 'app',
    title: 'Serving It Up!',
    slug: 'serving-it-up',
    description: 'A tennis and pickleball match tracker built for Apple Watch!',
    icon: '/images/apps/servingitup/icon.png',
    coverImage: '/images/apps/servingitup/WatchTennisClay.png',
    backgroundVideo: '/videos/sitv2.mov',
    appStoreUrl: 'https://apps.apple.com/us/app/serving-it-up/id6503021488',
    feedbackEmail: 'matt2harrington@gmail.com',
    order: 2,
    sections: [
      {
        title: 'Tennis',
        paragraphs: [
          'Serving It Up! is a tennis and pickleball match tracker built for Apple Watch!',
          'Simply add your opponents to get started!',
          'Play singles or doubles matches!',
          'Track tennis matches against an array of opponents easily with built in game functionality, custom match settings, and match history stored in iCloud!',
          'Choose from Advantage or Tiebreaker matches, custom court types, lengths of sets and even how many sets you choose to play!',
          'Weather conditions and location are stored for match data and conditioning usage!',
          'Track your match history!',
        ],
        image: '/images/apps/servingitup/WatchTennisClay.png',
      },
      {
        title: 'Pickleball',
        paragraphs: [
          'Serving It Up! is a tennis and pickleball match tracker built for Apple Watch!',
          'Simply add your opponents to get started!',
          'Play singles or doubles matches!',
          'Track pickleball matches against an array of opponents easily with built in game functionality, custom match settings, and match history stored in iCloud!',
          'Customize the length of the match before getting started!',
          'Track your match history!',
        ],
        image: '/images/apps/servingitup/PickleballView.png',
      },
      {
        title: 'Workouts',
        paragraphs: [
          'Apple Watch workouts are built directly in Serving It Up!',
          'Start a match and the workout runs in the background with a status view for easy tracking.',
          'Access your workouts in Fitness, Health or other native Apple applications powered by HealthKit!',
        ],
        image: '/images/apps/servingitup/WorkoutHard.png',
      },
      {
        title: 'Privacy Policy',
        paragraphs: [
          'Serving It Up! and its developer take your privacy very seriously. No information that is stored in Serving It Up! is used in anyway that is not advertised as Serving It Up! reads and writes directly to the device\'s local store only with iCloud backup support.',
          "Serving It Up! uses Apple's HealthKit Framework for saving workouts on the device. This data is not shared with any outside entity at any time. No user data or health data is withheld in Serving It Up! other than the infomation stated.",
          "Serving It Up! uses location data for Apple's WeatherKit Framework for optimizing data for usage! This data is not shared with any outside entity at any time. No user data or location data is withheld in Serving It Up! other than the infomation stated.",
          'Permission for Serving It Up! to read and write health information and/or location data can be removed at anytime by finding Serving It Up! in the watchOS Settings app (Settings > Privacy & Security > Serving It Up!).',
        ],
        image: '/images/apps/servingitup/icon.png',
      },
    ],
  },
  {
    type: 'app',
    title: 'Contact Eclipse',
    slug: 'contact-eclipse',
    description: 'Full control over your contacts with duplicate detection, custom lists, and more.',
    icon: '/images/apps/contacteclipse/icon.png',
    coverImage: '/images/apps/contacteclipse/icon.png',
    backgroundVideo: '/videos/ce.mp4',
    appStoreUrl: 'https://apps.apple.com/us/app/contact-eclipse/id1608625389',
    feedbackEmail: 'matt2harrington@gmail.com',
    order: 3,
    sections: [
      {
        title: 'Contacts',
        paragraphs: [
          'Contact Eclipse gives full control over your contacts.',
          "It starts with the presentation in the list. The contact's image is direction on the row below youe fingertips with their name and number on easy display as well.",
          'Select mutiple contacts for deletion, or merging them together to clean up your contact book or add a new contact with the quick and easy button right at the top of the screen when in a rush!',
          'And of course there are Favorites! Pin any amount of contacts right to the top for quick and easy access when it is needed most. Scroll horizontally to view contacts as they are added or hide them completely!',
        ],
        video: '/videos/contacts.mp4',
      },
      {
        title: 'Duplicate Contacts',
        paragraphs: [
          'Contact Eclipse allows for contact duplication detection!',
          'Easily find contacts that share common attributes such as name, phone number, address, or email!',
          'Select mutiple contacts for deletion, or merge them together as fit best to clean up your contacts quickly and efficiently!',
          'Take control of your contacts!',
        ],
        video: '/videos/duplicates.mp4',
      },
      {
        title: 'Custom Lists',
        paragraphs: [
          'Contact Eclipse can create custom lists from existing contacts for super quick and easy communication.',
          'Group together contacts that mean the most to you, with a beautiful display of image and easy information.',
          'After creation, lists can be updated quickly and as often as needed to keep you life updated.',
        ],
        video: '/videos/lists.mp4',
      },
      {
        title: 'Privacy Policy',
        paragraphs: [
          "Contact Eclipse and its developer take your privacy very seriously. No information that is stored in Contact Eclipse is used in anyway that is not advertised as Contact Eclipse reads and writes directly to the device's Contacts store only.",
          "Contact Eclipse uses Apple's CNContact Framework for accessing contacts already stored on the device. This data is not shared with any outside entity at any time. No user data or contact data is withheld in Contact Eclipse other than the infomation stated.",
          'Permission for Contact Eclipse to read and write contact information from Contacts can be removed at anytime by finding Contact Eclipse in the iOS Settings app (Settings > Contact Eclipse > Contacts), or by clicking the "Permissions" button in Contact Eclipse\'s Settings and disabling Contacts from use.',
        ],
        image: '/images/apps/contacteclipse/icon.png',
      },
    ],
  },
];

export const photoProjects: PhotoProject[] = [
  { type: 'photography', title: 'Travel', slug: 'travel', backgroundVideo: '/videos/uploadNYCEmpire.mp4', order: 4 },
  { type: 'photography', title: 'Model', slug: 'models', backgroundVideo: '/videos/walking.mp4', order: 5 },
  { type: 'photography', title: 'Urban', slug: 'urban', backgroundVideo: '/videos/subway.mp4', order: 6 },
  { type: 'photography', title: 'Wedding', slug: 'wedding', backgroundVideo: '/videos/walkingBubbles.mp4', order: 7 },
  { type: 'photography', title: 'Nature', slug: 'nature', backgroundVideo: '/videos/snow.mp4', order: 8 },
  { type: 'photography', title: 'Sports', slug: 'sports', backgroundVideo: '/videos/darlington.mp4', order: 9 },
  { type: 'photography', title: 'Music', slug: 'music', backgroundVideo: '/videos/panic.mp4', order: 10 },
];

export const allProjects: Project[] = [...appProjects, ...photoProjects];
