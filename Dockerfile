FROM beevelop/ionic as build

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

RUN ionic build

FROM nginx:1.15

COPY --from=build /app/www /usr/share/nginx/html/
