import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: ThemeText;
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, title, text, theme = ThemeText.PRIMARY } = props;
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {typeof title === 'string' && <p className={cls.title}>{title}</p>}
      {typeof text === 'string' && <p className={cls.text}>{text}</p>}
    </div>
  );
});
