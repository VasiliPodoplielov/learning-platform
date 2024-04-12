import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import styles from './styles.module.css';

export const SiteInfo = () => {
  const header = (
    <div className={styles.bgHeaderCard}>
      <div className="flex flex-column align-items-end pt-8 pr-5">
        <p className="text-100 text-2xl">Запишись до наc та почни навчатися вже сьогодні</p>
        <Button label="Записатися" />
      </div>
    </div>
  );

  return (
    <Card title="Advanced Card" subTitle="Card subtitle" header={header}>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </Card>
  );
};
