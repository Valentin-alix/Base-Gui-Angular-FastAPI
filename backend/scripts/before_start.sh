#!/bin/bash

source .venv/Scripts/activate

docker-compose stop

docker compose up -d

alembic --config ./config/alembic.ini revision --autogenerate
alembic --config ./config/alembic.ini upgrade head