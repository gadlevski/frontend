import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  className?: string;
  element?: HTMLElement;
  children?: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};