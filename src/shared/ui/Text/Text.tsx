import { FC, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: ThemeText;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, title, text, theme = ThemeText.PRIMARY, align = TextAlign.LEFT, size = TextSize.M } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {typeof title === 'string' && <p className={cls.title}>{title}</p>}
      {typeof text === 'string' && <p className={cls.text}>{text}</p>}
    </div>
  );
});
