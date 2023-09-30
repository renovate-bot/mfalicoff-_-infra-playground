FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3001

CMD ["node", "dist/index.js"]
