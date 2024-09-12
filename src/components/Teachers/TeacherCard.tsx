import { Card } from 'primereact/card';
import { useState } from 'react';

import { Teacher } from './types';

import sharedStyles from '../styles/sharedStyles.module.css';

interface Props {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: Props) => {
  const { imageUrl, name, language, introduction } = teacher;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-transparent"
    >
      <div className="w-full relative ">
        <img
          src={imageUrl}
          alt="Teacher"
          className={`h-14rem w-full h-auto border-round-2xl ${sharedStyles.objectFitCover} lg:h-full`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify transition-duration-300 border-radius ${isHovered ? 'bg-black-alpha-50 border-round-2xl' : 'bgTransparent'}`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify ${isHovered ? 'bg-bg-black-alpha-50' : 'bgTransparent'}`}
          >
            <h3 className="text-white p-0 m-0">{name}</h3>
            <h4 className="text-white p-0 m-0">{language}</h4>
            {isHovered && (
              <p className="text-xs text-white text-overflow-clip w-full sm:text-sm xl:text-base">
                {introduction}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
