# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build api`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t api`.
FROM node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system app && \
          adduser --system -G app app

COPY apps/app/ app/
RUN chown -R app:app .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix api --omit=dev -f install

CMD [ "npx", "vite", "serve", "--mode=prod" ]
