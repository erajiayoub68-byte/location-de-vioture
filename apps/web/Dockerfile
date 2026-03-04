FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN pnpm install
EXPOSE 3000
CMD ["pnpm", "--filter", "web", "dev"]
