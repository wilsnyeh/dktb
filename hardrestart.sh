#!/bin/bash
docker compose down
docker volume remove DONT-KICK-THE-BUCKET
# docker volume remove pgadmin
docker volume create DONT-KICK-THE-BUCKET
# docker volume create pgadmin
docker compose up --build