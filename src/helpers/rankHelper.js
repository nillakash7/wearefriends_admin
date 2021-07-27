export const rankCategories = [
  { value: 100, text: 'Admin', iconUrl: '/icons/ranks/pheonix.png' },
  { value: 101, text: 'Support', iconUrl: '/icons/ranks/pheonix.png' },
  { value: 200, text: 'CNEXChange Admin', iconUrl: '/icons/ranks/pheonix.png' },
  { value: 300, text: 'Eazme Admin', iconUrl: '/icons/ranks/pheonix.png' },
  {
    value: 1000,
    text: 'Newly Registered iRAP',
    iconUrl: '/icons/ranks/NRiRAP.png'
  },
  { value: 2100, text: 'iRAP', iconUrl: '/icons/ranks/iRAP.png' },
  { value: 2200, text: 'Red Star', iconUrl: '/icons/ranks/RedStar.png' },
  { value: 2300, text: 'Green Star', iconUrl: '/icons/ranks/GreenStar.png' },
  { value: 2400, text: 'Blue Star', iconUrl: '/icons/ranks/BlueStar.png' },
  { value: 2500, text: 'White Star', iconUrl: '/icons/ranks/WhiteStar.png' },
  { value: 2600, text: 'Black Star', iconUrl: '/icons/ranks/BlackStar.png' },
  { value: 2700, text: 'Gold Star', iconUrl: '/icons/ranks/GoldStar.png' },
  { value: 3100, text: 'Mercury', iconUrl: '/icons/ranks/Mercury.png' },
  { value: 3200, text: 'Venus', iconUrl: '/icons/ranks/Venus.png' },
  { value: 3300, text: 'Jupiter', iconUrl: '/icons/ranks/Jupiter.png' },
  { value: 3400, text: 'Phoenix', iconUrl: '/icons/ranks/Phoenix.png' }
];

export const getRankIcon = (rankId) => {
  const rank = rankCategories.find((r) => r.value === rankId);
  return rank ? rank.iconUrl : rankCategories[0].iconUrl;
};

export const getRankByID = (rankID) => {
  if (!rankID) return undefined;

  return rankCategories.find((c) => c.value === rankID);
};

export const getRankName = (rankID) => {
  const rank = rankCategories.find((r) => r.value === rankID);
  return rank ? rank.text : 'N/A';
};
