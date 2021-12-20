FROM public.ecr.aws/bitnami/node:14.15.1-debian-10-r8
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]