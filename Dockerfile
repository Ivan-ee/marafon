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