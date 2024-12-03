export const getMenuItems = (getTranslation: (key: string) => string) => [
  {
    label: getTranslation('header.menu.home'),
    icon: 'pi pi-home',
    url: './',
  },
  {
    label: getTranslation('header.menu.reviews'),
    icon: 'pi pi-star',
    url: '#reviews',
  },
  {
    label: getTranslation('header.menu.teachers'),
    icon: 'pi pi-users',
    url: '#teachers',
  },
  {
    label: getTranslation('header.menu.contacts'),
    icon: 'pi pi-envelope',
    url: '#footer',
  },
  {
    label: getTranslation('header.menu.translations'),
    icon: 'pi pi-receipt',
    url: '/learning-platform/translations',
  },
];
