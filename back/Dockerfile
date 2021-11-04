FROM node:14.17.0-alpine

# This instructs Docker to use this path as the default location for all subsequent commands.
WORKDIR /app

ENV PATH /app/node_modules/.bin:${PATH}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Add our source code into the image.
COPY . .

EXPOSE 5000

ENTRYPOINT [ "/bin/sh", "./entrypoint.sh" ]
# CMD [ "npm", "start" ]

# docker build --tag back-taskhub .
# docker run  -it -p 5000:5000  back-taskhub

