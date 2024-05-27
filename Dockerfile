# Используем образ Node.js
FROM node:20-alpine

# Устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Сборка приложения
RUN npm run build

# Запускаем сервер
CMD ["npm", "run", "preview"]


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]