import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

// Описание набора тестов для компонента "Кнопка"
describe('Кнопка', () => {
  // Тест для проверки, что кнопка содержит только текст
  test('Только текст внутри', () => {
    // Рендеринг компонента Button с текстом 'TEST'
    render(<Button>TEST</Button>);

    // Проверка, что элемент с текстом 'TEST' присутствует в документе
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  // Тест для проверки, что кнопка содержит текст и определенный класс
  test('Текст внутри и класс', () => {
    // Рендеринг компонента Button с текстом 'TEST' и темой ThemeButton.CLEAR
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);

    // Проверка, что элемент с текстом 'TEST' имеет класс 'clear'
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
