# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
COPY server/package*.json ./server/

# Устанавливаем зависимости
RUN npm install
RUN cd server && npm install

# Копируем весь код
COPY . .

# Убираем билд во время сборки образа
# RUN npm run build

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["sh", "-c", "npm run build && npm run dev:all"]