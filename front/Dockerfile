FROM node:14.17.0-alpine

# This instructs Docker to use this path as the default location for all subsequent commands.
WORKDIR /app

ENV PATH /app/node_modules/.bin:${PATH}

COPY package*.json ./

# Once we have our files inside the image, we can use the RUN command to execute the command npm install.
RUN npm install

# Add our source code into the image.
COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]


# docker build --tag front-taskhub .
# docker run  -it -p 8081:8081  front-taskhub

