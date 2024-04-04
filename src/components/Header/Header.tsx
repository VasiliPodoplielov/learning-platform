import { Button } from 'primereact/button'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'Головна',
            icon: 'pi pi-home',
        },
        {
            label: 'Відгуки',
            icon: 'pi pi-star',
        },
        {
            label: 'Вчителі',
            icon: 'pi pi-users',
        },
        {
            label: 'Контакти',
            icon: 'pi pi-envelope',
        },
        {
            label: 'Переклад',
            icon: 'pi pi-receipt',
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-5"></img>;
        const end = (
            <div className="flex align-items-center gap-2">
                <Button className="mr-5" label="Пробний урок" />
                <Button label="Мова" />
            </div>
        );
    
    return (
        <div className="card">
            <Menubar model={items} start={start} end={end}/>
        </div>
    );
}
   