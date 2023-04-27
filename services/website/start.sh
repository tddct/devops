docker build . -t webapp
docker run -p 8888:80 webapp                           