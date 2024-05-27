# Используем образ Node.js для сборки
FROM node:20-alpine AS build

# Устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходный код и собираем приложение
COPY . .
RUN npm run build

# Используем образ Nginx для сервировки статических файлов
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
