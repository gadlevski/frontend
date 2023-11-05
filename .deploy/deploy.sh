cd ~/frontend
npm run b:prod

# Удаляем все содержимое в папке /var/www/frontend/html/
sudo rm -rf /var/www/frontend/html/*

# Перемещаем все файлы из /root/frontend/build/ в /var/www/frontend/html/
sudo mv /root/frontend/build/* /var/www/frontend/html/
