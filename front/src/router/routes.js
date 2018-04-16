
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '/map', component: () => import('pages/Map') },
      { path: '/arrival', component: () => import('pages/ArrivalDescription') },
      { path: '/officialPaths', component: () => import('pages/OfficialPaths') },
      { path: '/interestingPlacesMenu', component: () => import('pages/InterestingPlacesMenu') },
      { path: '/monumentsMenu', component: () => import('pages/MonumentsMenu') },
      { path: '/naturalAttractionsMenu', component: () => import('pages/NaturalAttractionsMenu') },
      { path: '/touristAttractionsMenu', component: () => import('pages/TouristAttractionsMenu') },
      { path: '/pathDescription/:id', component: () => import('pages/PathDescription') },
      { path: '/details/:id', component: () => import('pages/CardItemDetails') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
