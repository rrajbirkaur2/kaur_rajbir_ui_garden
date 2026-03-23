# Step 1: Build Storybook
FROM node:20-alpine AS build

WORKDIR /kaur_rajbir_ui_garden_build_checks

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-storybook


# Step 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /kaur_rajbir_ui_garden_build_checks/storybook-static /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]