
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button'; 
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a href="#/" className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items: MenuItem[] = [
        {
            label: 'Вчителі',
            icon: 'pi pi-user',
        },
        {
            label: 'Відгуки ',
            icon: 'pi pi-star',
        },
        {
            label: 'Контакти ',
            icon: 'pi pi-envelope',
        },
        {
            label: 'Переклад документів',
            icon: 'pi pi-book',
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
        