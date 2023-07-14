import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';


describe('Кнопка', () => {
  test('Только текст внутри', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Текст внутри и класс', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});