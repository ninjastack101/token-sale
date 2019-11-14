FROM node:8-alpine

WORKDIR /opt

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

# Install all dependencies of the token-sale
RUN npm install --unsafe-perm

# Bundle token-sale source
COPY . .