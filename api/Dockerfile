FROM node:22
WORKDIR /src
COPY src/package*.json .
RUN npm install
COPY  src/ ./
CMD [ "node", "app.js"]
# CMD ["/bin/ls", "-lR", "controllers" ]