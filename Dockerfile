FROM node:20-alpine
USER root

USER 1000
WORKDIR /usr/src/app

# copia o package.json e o package-lock.json para o contêiner
COPY --chown=1000 package.json package-lock.json ./

# copia o resto dos arquivos do aplicativo para o contêiner
COPY --chown=1000 . .

RUN npm install
RUN npm run build

# expõe a porta do aplicativo (assumindo que seu aplicativo seja executado na porta 3000)
EXPOSE 3000

# inicia o aplicativo
CMD ["npm", "start"]