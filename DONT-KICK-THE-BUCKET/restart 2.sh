#!/bin/bash
docker compose down
docker volume remove DONT-KICK-THE-BUCKET
# docker volume remove postgres-data
docker volume create DONT-KICK-THE-BUCKET
# docker volume create postgres-data
docker-compose up --build