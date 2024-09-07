FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
EXPOSE 3001
CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]