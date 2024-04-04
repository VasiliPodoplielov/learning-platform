import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

import { menuItems } from './constants';

export const Header = () => {
    const items = menuItems;
    const logo = (
        <img 
            alt="logo" 
            src="https://primefaces.org/cdn/primereact/images/logo.png" 
            height="40" 
            className="mr-5"
        />
    );
    const headerActions = (
        <div className="flex align-items-center gap-2">
            <Button className="mr-5" label="Пробний урок" />
            <Button label="Мова" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={logo} end={headerActions} />
        </div>
    );
};
