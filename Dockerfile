FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# expose port ที่ vue dev server ใช้
EXPOSE 8080

# run dev server
CMD ["npm", "run", "serve"]
