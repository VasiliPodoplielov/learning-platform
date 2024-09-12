import { Card } from 'primereact/card';
import { useState } from 'react';

import { Teacher } from './types';

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
      <div className="w-full overflow-hidden relative">
        <img src={imageUrl} alt="Teacher" className={`w-full h-auto border-round-2xl`} />
        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify transition-duration-300`}
          style={{
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
            borderRadius: '1rem',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex flex-column justify-end p-3 text-justify isHovered ? bg-bg-black-alpha-50 : bgTransparent">
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
