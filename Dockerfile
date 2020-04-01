# Base our image on an official, minimal image of our preferred nodejs
FROM node:12-slim

ENV BUILD_PACKAGES="" \
    DEV_PACKAGES="" \
    RUNTIME_PACKAGES="" \
    TO_REMOVE="" \
    NODE_ENV="development"

RUN \
  apt-get update -qq && \
  apt-get install -y $BUILD_PACKAGES $DEV_PACKAGES $RUNTIME_PACKAGES

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
RUN mkdir -p /var/www/einstein
WORKDIR /var/www/einstein

# Copy the main application.
COPY . ./

# Install JS dependencies
RUN yarn install --production=false

# Build the app
RUN yarn run build

# By default, the container runs and does nothing (just providing a volume)
CMD ["yarn", "run", "watch"]
