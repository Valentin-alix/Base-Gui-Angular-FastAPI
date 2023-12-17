#!/bin/bash

source .venv/Scripts/activate

docker stop $(docker ps -a -q) 

docker compose up -d

alembic --config ./config/alembic.ini revision --autogenerate
alembic --config ./config/alembic.ini upgrade head