FROM node:lts AS base
WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --frozen-lockfile --prod

FROM base AS build-deps
RUN pnpm install --frozen-lockfile

FROM build-deps AS build
ARG SATOSHI_WOFF2_URL
ARG SATOSHI_ITALIC_WOFF2_URL
COPY . .
RUN mkdir -p src/assets/satoshi && \
    curl -fsSL -o src/assets/satoshi/Satoshi-Variable.woff2 "$SATOSHI_WOFF2_URL" && \
    curl -fsSL -o src/assets/satoshi/Satoshi-VariableItalic.woff2 "$SATOSHI_ITALIC_WOFF2_URL"
RUN pnpm build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json revolt-server.mjs ./

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "revolt-server.mjs"]
