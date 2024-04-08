export const getMenuItems = (getTranslation: (key: string) => string) => ([
  {
    label: getTranslation('header.menu.home'),
    icon: 'pi pi-home',
  },
  {
    label: getTranslation('header.menu.reviews'),
    icon: 'pi pi-star',
  },
  {
    label: getTranslation('header.menu.teachers'),
    icon: 'pi pi-users',
  },
  {
    label: getTranslation('header.menu.contacts'),
    icon: 'pi pi-envelope',
  },
  {
    label: getTranslation('header.menu.translations'),
    icon: 'pi pi-receipt',
  },
]);