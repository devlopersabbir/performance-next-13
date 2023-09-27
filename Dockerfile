FROM node:18-alpine
WORKDIR /performance_next13
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]