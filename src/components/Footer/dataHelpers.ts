export const getFooterItems = (getTranslation: (key: string) => string) => ({
  links: [
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
  ],
  contacts: [
    {
      label: getTranslation('footer.contacts.tittle'),
      icon: '',
    },
    {
      label: '+38(067)043-45-56',
      icon: 'pi pi-phone',
      className: 'white-space-nowrap',
    },
    {
      label: 'shool@gmail.com',
      icon: 'pi pi-envelope',
    },
    {
      label: getTranslation('footer.contacts.telegram'),
      icon: 'pi pi-telegram',
    },
  ],
  address: [
    {
      label: getTranslation('footer.address.tittle'),
    },
    {
      label: getTranslation('footer.address.timeOpen'),
    },
    {
      label: getTranslation('footer.address.tittleAddress'),
    },
    {
      label: getTranslation('footer.address.addressStreet'),
    },
  ],
});
