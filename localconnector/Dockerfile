FROM node:10.11.0-alpine




WORKDIR /code



# Turn down the verbosity to default level.

ENV NODE_ENV=production

# Wrapper/boot-strapper
COPY package.json .

 # Copy outer function handler
COPY ./bin ./bin
COPY ./lib ./lib

RUN npm i -production


CMD ["node",  "/code/bin/app.js"]