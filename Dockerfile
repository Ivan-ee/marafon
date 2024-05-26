# Используем образ Node.js с версией 18 (или другой, если необходимо)
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы приложения в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы приложения
COPY . .

# Запускаем скрипт сборки
RUN npm run build

# Устанавливаем Nginx как веб-сервер
FROM nginx:latest

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Устанавливаем директорию для сборки приложения
COPY --from=build /app/build /usr/share/nginx/html

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]