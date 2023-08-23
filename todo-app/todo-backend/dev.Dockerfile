FROM node:16

WORKDIR /usr/src/todo-app

COPY --chown=node:node . .
RUN npm install

# ENV DEBUG=express:*

USER node
CMD npm run dev