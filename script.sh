docker stack deploy func -c docker-compose.yml
docker stack deploy func -c tempconnector/docker-compose.yml
faas-cli up --parallel=10
