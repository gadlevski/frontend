import { FC, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder' | 'readonly'> {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  placeholder?: string | null;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange?.(inputValue);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  useEffect(() => {
    if (autofocus) {
      inputRef?.current?.focus();
    }
  }, [autofocus]);


  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {typeof placeholder === 'string' && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
