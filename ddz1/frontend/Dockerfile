# Используем официальный образ Node.js в качестве базового образа для фронтенда
FROM node:14 AS frontend

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего каталога в рабочую директорию
COPY . .

# Собираем приложение
RUN npm run build

# Используем образ Nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем собранные файлы React из образа frontend в образ nginx
COPY --from=frontend /app/build /usr/share/nginx/html

# Экспонируем порт 80 для веб-сервера Nginx
EXPOSE 80

# Команда для запуска Nginx при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
