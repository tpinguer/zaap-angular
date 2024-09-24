# Usar Node.js para desenvolvimento
FROM node:18-alpine

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar todo o código da aplicação para o container
COPY . .

# Expôr a porta padrão do Angular (4200)
EXPOSE 4200

# Comando para iniciar o servidor Angular
CMD ["npm", "start"]
