FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN pnpm install
EXPOSE 4000
CMD ["pnpm", "--filter", "api", "dev"]
