import { MutableRefObject, useCallback, useRef } from 'react';

// позволяет отменять вызов функции в течении заданного времени

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>; // таймер для отложенного вызова функции

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        // если уже есть таймер
        clearTimeout(timer.current); // отменяем его
      }
      timer.current = setTimeout(() => {
        // устанавливаем новый таймер
        callback(...args); // вызываем функцию после истечения времени задержки
      }, delay);
    },
    [callback, delay],
  );
}
