import { Card } from 'primereact/card';

import sharedStyles from '../styles/sharedStyles.module.css';
import styles from './styles.module.css';
import { Teacher } from './types';
interface Props {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: Props) => {
  const { imageUrl, name, language, introduction } = teacher;

  return (
    <Card className="border-transparent">
      <div className={`w-full relative ${styles.wrapperCard}`}>
        <img
          src={imageUrl}
          alt="Teacher"
          className={`h-14rem w-full h-auto border-round-2xl ${sharedStyles.objectFitCover} lg:h-full`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify transition-duration-300 border-radius hover:bg-black-alpha-50 border-round-2xl">
          <div className="absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify hover:bg-bg-black-alpha-50">
            <h3 className="text-white p-0 m-0">{name}</h3>
            <h4 className="text-white p-0 m-0">{language}</h4>
            <p
              className={`${styles.introductionText} text-xs text-white text-overflow-clip w-full sm:text-sm xl:text-base opacity-0 transition-opacity duration-300`}
            >
              {introduction}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
