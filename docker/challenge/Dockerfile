FROM node:4.3.1

COPY p2 /opt/app/

WORKDIR /opt/app/
RUN npm install

ENTRYPOINT ["node", "/opt/app/index.js"]
