import { useCallback, useRef } from 'react';

// позволяет выполнить функцию только один раз в заданный промежуток времени

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const isReadyToCallRef = useRef(true);  // функция готова к вызову

  return useCallback((...args: any[]) => {
    if (isReadyToCallRef.current) {
      callback(...args); // функция вызвалась
      isReadyToCallRef.current = false; // и флажок сразу же меняется на false

      setTimeout(() => {
        isReadyToCallRef.current = true; // через delay снова вернется на true и ее можно будет вызвать
      }, delay);
    }
  }, [callback, delay]);
}
