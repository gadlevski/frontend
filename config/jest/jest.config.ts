import path from 'path';

export default {
  // Набор глобальных переменных, которые должны быть доступны во всех средах тестирования
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  // Автоматически очищать вызовы, экземпляры, контексты и результаты моков перед каждым тестом
  clearMocks: true,
  // Среда тестирования, которая будет использоваться для тестирования
  testEnvironment: 'jsdom',
  // Массив строк регулярных выражений, используемых для пропуска сбора покрытия
  coveragePathIgnorePatterns: ['/node_modules/'],
  // Массив расширений файлов, используемых модулями
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  // Массив имен каталогов, которые должны рекурсивно искать, начиная с расположения модуля, требующегося
  moduleDirectories: ['node_modules'],
  // Глобальные шаблоны, которые использует Jest для определения файлов тестов
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  // Корневой каталог, который Jest должен сканировать для поиска тестов и модулей
  rootDir: '../../',

  // свойство для указания файлов, которые будут загружены после установки тестового окружения, но перед запуском тестов.
  // В этом случае, одним из таких файлов является 'setupTests.ts'
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

  // свойство определяет пути, в которых Jest будет искать модули.
  // В данном случае, Jest будет искать модули в папке 'src', расположенной в корневой директории проекта.
  modulePaths: ['<rootDir>src'],

  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        // openReport: true,
        inlineSource: true,
      },
    ],
  ],
};
