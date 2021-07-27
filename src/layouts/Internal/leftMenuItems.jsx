import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import BusinessIcon from '@material-ui/icons/Business';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import LocalAtmIcon from '@material-ui/icons/LocalAtm';
// import CardTravelIcon from '@material-ui/icons/CardTravel';
// import EqualizerIcon from '@material-ui/icons/Equalizer';
// import CardMembershipIcon from '@material-ui/icons/CardMembership';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import HelpIcon from '@material-ui/icons/Help';
// import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';

import routePaths from '../../routePaths';

// eslint-disable-next-line import/prefer-default-export
export const getLeftMenus = (role) => {
  const menus = [
    {
      title: 'Dashboard',
      path: routePaths.DASHBOARD,
      icon: DashboardIcon
    },
    {
      title: 'Posts',
      path: routePaths.POSTS,
      icon: RssFeedIcon
    },
    {
      title: 'Members',
      path: routePaths.MEMBERS,
      icon: PeopleAltOutlinedIcon
    },
    {
      title: 'Partners',
      path: routePaths.PARTNERS,
      icon: BusinessIcon
    },
    {
      title: 'Admin Users',
      path: routePaths.ADMIN_USERS,
      icon: SupervisorAccountIcon
    }

    // #region Community
    // {
    //   title: 'My Community',
    //   href: '/my-community',
    //   icon: PeopleAltOutlinedIcon,
    //   items: [
    //     {
    //       title: 'Add Referral',
    //       href: routePaths.ADD_REFERRAL
    //     },
    //     {
    //       title: 'My Referral',
    //       href: routePaths.MY_REFERRAL
    //     },
    //     {
    //       title: 'My Community',
    //       href: routePaths.MY_COMMUNITY
    //     },
    //     {
    //       title: 'Placement Tree',
    //       href: routePaths.PLACEMENT_TREE
    //     },
    //     {
    //       title: 'Enroller Tree',
    //       href: routePaths.ENROLLER_TREE
    //     }
    //   ]
    // },
    // #endregion

    // #region My Earnings
    // {
    //   title: 'My Earnings',
    //   href: '/my-earnings',
    //   icon: MonetizationOnIcon,
    //   items: [
    //     {
    //       title: 'My Wallet',
    //       href: routePaths.MY_WALLET
    //     },
    //     {
    //       title: 'My Pearls Wallet',
    //       href: routePaths.MY_PEARLS_WALLET
    //     },
    //     {
    //       title: 'My Bonus Volume',
    //       href: routePaths.MY_BONUS_VOLUME
    //     },
    //     {
    //       title: 'Topup Referral Bonus',
    //       href: routePaths.TOPUP_REFERRAL_BONUS
    //     },
    //     {
    //       title: 'Matching Cycle Bonus',
    //       href: routePaths.MATCHING_CYCLE_BONUS
    //     },
    //     {
    //       title: 'Cycle Bonus',
    //       href: routePaths.CYCLE_BONUS
    //     },
    //     {
    //       title: 'Balance Cashback/Bonus',
    //       href: routePaths.PENDING_CASHBACK_BONUS
    //     }
    //   ]
    // },
    // #endregion
  ];

  if (role) {
    // const salesFunnel = {
    //   title: 'Affiliate Lead Mgmt.',
    //   href: '/lead-management',
    //   icon: MenuBookIcon,
    //   items: [
    //     {
    //       title: 'Lead Pages',
    //       href: routePaths.PREMIUM_LP
    //     },
    //     {
    //       title: 'Lead Management',
    //       href: routePaths.SALE_LEAD
    //     },
    //     {
    //       title: 'Lead Report',
    //       href: routePaths.SALE_REPORT
    //     }
    //   ]
    // };
    // menus.splice(menus.length - 1, 0, { ...salesFunnel });
  }
  return menus;
};
