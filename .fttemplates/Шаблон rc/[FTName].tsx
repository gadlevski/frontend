import { FC, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './<FTName>.module.scss';

interface <FTName>Props {
  className ?: string;
  children ?: ReactNode;
}

export const <FTName>: FC <<FTName>Props> = memo((props) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.<FTName>, {}, [className])}>
      {children}
    </div>
  );
});