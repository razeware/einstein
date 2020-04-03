#!/bin/bash

docker build -t einstein-atoe .
docker run -v "$(pwd)/dist:/var/www/einstein/dist" --rm einstein-atoe yarn run build
