import { classNames } from './classNames';

describe('Функция classNames()', () => {
  test('Только с первым аргументом', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('С дополнительными классами', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('С дополнительными модами', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('С дополнительными модами', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('С дополнительными модами', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
