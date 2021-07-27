import { SOCIAL_LINKS } from '../configs/appConfig';
import routePaths from '../routePaths';

export const logoUrl = '/images/home_page/logo.png';
export const aboutUsImgUrl = '/images/home_page/about.jpg';
export const whyUsImgUrl = '/images/home_page/why-us.jpg';
export const csrImgUrl = '/images/home_page/csr.jpeg';

export const topSocialIcons = [
  {
    title: 'Facebook',
    url: SOCIAL_LINKS.FACEBOOK,
    className: 'fab fa-facebook-f'
  },
  {
    title: 'Instagram',
    url: SOCIAL_LINKS.INSTAGRAM,
    className: 'fab fa-instagram'
  },
  {
    title: 'Telegram',
    url: SOCIAL_LINKS.TELEGRAM,
    className: 'fab fa-telegram-plane'
  }
];

export const navItems = [
  {
    title: 'Home',
    url: routePaths.HOME,
    iconUrl: '/icons/home/home.svg'
  },
  {
    title: 'About us',
    url: routePaths.ABOUT_US,
    iconUrl: '/icons/home/about_us.svg'
  },
  {
    title: 'Business Opportunities',
    url: routePaths.BUSINESS_OPPORTUNITIES,
    iconUrl: '/icons/home/business_opportunities.svg'
  },
  {
    title: 'News & Media',
    url: routePaths.NEWS_MEDIA,
    iconUrl: '/icons/home/news_media.svg'
  },
  {
    title: 'Webinars & Events',
    url: routePaths.WEBINARS_EVENTS,
    iconUrl: '/icons/home/webinar.svg'
  },
  {
    title: 'Contact Us',
    url: routePaths.CONTACT_US,
    iconUrl: '/icons/home/contact_us.svg'
  },
  {
    title: 'Login/Signup',
    url: routePaths.LOGIN,
    iconUrl: '/icons/home/about_us.svg'
  }
];

export const getWelcomeTxt = () => {
  return {
    title: 'sms: Rise Up and Above',
    description:
      'This is where your life changes forever. Make the smartest decision of your life by becoming a member of the sms Community, where all that matters is you. A crypto friendly platform that ensures you are equipped with a global arena and highest earning opportunities possible since the beginning.'
  };
};

export const getAboutUsTxt = () => {
  return `We at sms, are creating a New World Economy, where a term such as limitation doesn’t exist. You build your own empire and we’ll be there to make your journey smoother & easier. Expand your horizon mentally and financially with an organization that believes in empowering you.<br /><br />
  A unique business model that operates globally and ensures you have a stable and consistent source of income at all times, not just by becoming a member of the sms Community, but also through <a target='_blank' href="https://www.eazme.com">Eazme</a>, a commercial eco-system where anything and everything is rewarded. <br /><br />
  Advancement remains at the core of our existence. We are initiating a culture, where you progress with us as we go ahead. The Phoenix has no limit when it comes to flying, likewise, at sms, it’s more about you; to grow & float till with us till infinity.`;
};

export const getBusinessItems = () => {
  const opportunities = [
    {
      title: 'Personalized sms Dashboard',
      url:
        '/images/home_page/business-opportunity/personalized-sms-dashboard.png'
    },
    {
      title: 'Global Business Opportunity',
      url:
        '/images/home_page/business-opportunity/global-business-opportunity.png'
    },
    {
      title: '12+ Income Streams',
      url: '/images/home_page/business-opportunity/income-streams.png'
    },
    {
      title: 'Multiple Payment Modes',
      url: '/images/home_page/business-opportunity/multiple-payment-modes.png'
    },
    {
      title: 'Comprehensive Business Tools',
      url:
        '/images/home_page/business-opportunity/comprehensive-business-tools.png'
    },
    {
      title: 'Lifestyle Rewards & Recognition',
      url:
        '/images/home_page/business-opportunity/lifestyle-rewards-recognition.png'
    },
    {
      title: 'Luxury Travel Incentive',
      url: '/images/home_page/business-opportunity/luxury-travel-incentive.png'
    },
    {
      title: 'Competitive Compensation Plan',
      url:
        '/images/home_page/business-opportunity/competitive-compensation-plan.png'
    },
    {
      title: 'Cultural Exchange Program',
      url:
        '/images/home_page/business-opportunity/cultural-exchange-program.png'
    },
    {
      title: 'Exclusive Entrepreneurship Development Program',
      url:
        '/images/home_page/business-opportunity/exclusive-entrepreneurship-development-program.png'
    }
  ];

  return opportunities;
};

export const socialLinks = [
  {
    title: 'Facebook',
    className: 'fab fa-facebook-f',
    url: SOCIAL_LINKS.FACEBOOK
  },
  {
    title: 'Twitter',
    className: 'fab fa-twitter',
    url: SOCIAL_LINKS.TWITTER
  },
  {
    title: 'Instagram',
    className: 'fab fa-instagram',
    url: SOCIAL_LINKS.INSTAGRAM
  },
  {
    title: 'Linkedin',
    className: 'fab fa-linkedin-in',
    url: SOCIAL_LINKS.LINKEDIN
  },
  {
    title: 'Telegram',
    className: 'fab fa-telegram-plane',
    url: SOCIAL_LINKS.TELEGRAM
  }
  // {
  //   title: 'Youtube',
  //   className: 'fab ',
  //   url: SOCIAL_LINKS.YOUTUBE
  // }
];

export const getImprintInfo = () => {
  return {
    title: 'The website is managed and owned by <br />Eazme Ventures',
    licence: 'License Number: 865264',
    address: 'Single one Tower, Business Bay<br />Dubai - UAE'
  };
};

export const getContactInfos = () => {
  return [
    {
      office: 'UAE Office',
      email: 'partner@sms.com',
      title: 'sms Global Marketing',
      address:
        'Single Business Tower, Business Bay,<br />Dubai - UAE <br />License No: 865246'
    },
    {
      office: 'India Office',
      email: 'smsmedia@gmail.com',
      title: 'Connect sms Global Private Limited',
      address:
        'A-23, Sector 4, Noida, Gautam Buddha Nagar <br /> Uttar Pradesh- 201301 <br />India'
    }
  ];
};
