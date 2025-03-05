import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const getMenuItems = (getTranslation: (key: string) => string) => [
  {
    icon: 'pi pi-home',
    template: <Link to="/learning-platform/">{getTranslation('header.menu.home')}</Link>,
  },
  {
    icon: 'pi pi-star',
    template: (
      <HashLink to="/learning-platform#reviews">{getTranslation('header.menu.reviews')}</HashLink>
    ),
  },
  {
    icon: 'pi pi-users',
    template: (
      <HashLink to="/learning-platform/#teachers">
        {getTranslation('header.menu.teachers')}
      </HashLink>
    ),
  },
  {
    icon: 'pi pi-envelope',
    template: (
      <HashLink to="/learning-platform#footer">{getTranslation('header.menu.contacts')}</HashLink>
    ),
  },
  {
    icon: 'pi pi-receipt',
    template: (
      <Link to="/learning-platform/translations">{getTranslation('header.menu.translations')}</Link>
    ),
  },
];
