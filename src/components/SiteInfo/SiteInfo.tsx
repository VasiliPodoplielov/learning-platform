import React from 'react';
import { Card } from 'primereact/card';
import infoCardImg from '../../../public/images/Info.jpg';
import { Button } from 'primereact/button';



export const SiteInfo = () => {
    const header = (
        <img className='max-h-30rem bg-no-repeat bg-center bg-cover' alt="Card" src={infoCardImg} />
    );

    return <Card title="Advanced Card" subTitle="Card subtitle" header={header} className="relative">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
        <div className='absolute top-0 right-0'>
            <p className='p-4 border-round font-bold text-gray-800'>Запишись до наш та почни навчатися вже сьогодні</p>
            <Button label="Записатися" />
        </div>
    </Card>;
};
