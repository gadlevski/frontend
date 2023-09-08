import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './<FTName | capitalcase>.module.scss';

interface <FTName | capitalcase>Props {
  className ?: string;
  children ?: ReactNode;
}

export const <FTName | capitalcase>: FC <<FTName | capitalcase>Props > = (props) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.<FTName | capitalcase>, {}, [className])}>
      {children}
    </div>
  );
};