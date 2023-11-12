/* eslint-disable i18next/no-literal-string */
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize, ThemeText } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import cls from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Page data-testid="MainPage">
      <Text
        className={cls.block}
        text="Проект написал с помощью следующих технологий"
        size={TextSize.L}
        theme={ThemeText.INVERTED}
      />
      <VStack gap="16">
        <Text
          theme={ThemeText.INVERTED}
          text="– React, Typescript, Redux-toolkit, RTK Query"
        />
        <Text theme={ThemeText.INVERTED} text="– Сборщики: Webpack, Vite" />
        <Text theme={ThemeText.INVERTED} text="– Линтеры: Eslint, Stylelint" />
        <Text
          theme={ThemeText.INVERTED}
          text="– Верстка: Sass, Styled components"
        />
        <Text
          theme={ThemeText.INVERTED}
          text="– Unit тесты: Jest, React Testing Library"
        />
        <Text
          theme={ThemeText.INVERTED}
          text="– Скриншотное тестирование: Storybook, Loki, StoryCap, Reg-cli"
        />
        <Text theme={ThemeText.INVERTED} text="– E2E тестирование: Cypress" />
        <Text
          theme={ThemeText.INVERTED}
          text="– Архитектура проекта: Feature sliced design"
        />
      </VStack>
    </Page>
  );
};

export default MainPage;
