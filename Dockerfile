FROM node:18.7.0-alpine3.15

WORKDIR /root/vite-quick-start

RUN npm install -g serve@13.0.4

RUN apk add git

COPY public public/

COPY vite.config.ts index.html package.json package-lock.json tsconfig.json .eslintrc.cjs ./

RUN npm install

COPY src src/

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "dist", "-l", "3000"]
