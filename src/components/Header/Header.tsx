import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

import { menuItems } from './constants';

export const Header = () => {

    const logo = (
        <img 
            alt="logo" 
            src="https://primefaces.org/cdn/primereact/images/logo.png" 
            height="40" 
            className="mr-5"
        />
    );
    const headerActions = (
        <div className="flex justify-content-end gap-2">
            <Button label="Пробний урок" />
            <Button label="Мова" />
        </div>
    );

    return (
        <div className='header'>
            <Menubar className='text-xl'  model={menuItems} start={logo} end={headerActions} />
        </div>
    );
};

