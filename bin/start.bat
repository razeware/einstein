docker build -t einstein-atoe .
docker run -p 4000:4000 -v"%CD%":\var\www\einstein" -it --rm einstein-atoe yarn run start
