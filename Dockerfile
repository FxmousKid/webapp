FROM node:20-alpine

WORKDIR /usr/src/app

# Installe les dépendances
COPY package.json ./
RUN npm install

# Copie tout le projet NestJS
COPY . .

# Build avec le CLI NestJS
RUN npm run build

# Lance le backend compilé
CMD ["node", "dist/main.js"]
# ENTRYPOINT ["sh", "-c", "tail -f /dev/null"]
