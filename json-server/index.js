const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const users = router.db.get('users');

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  // Проверяем, является ли запрос одним из запросов к статьям
  if (req.path.startsWith('/articles')) {
    // Если да, то пропускаем проверку авторизации
    next();
  } else {
    // Для всех остальных запросов выполняем проверку авторизации
    if (!req.headers.authorization) {
      return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
  }
});

server.use(router);

// запуск сервера
server.listen(8200, () => {
  console.log('server is running on 8200 port');
});