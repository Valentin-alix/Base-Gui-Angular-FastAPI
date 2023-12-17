#!/bin/bash

set -e

ENV_PATH=".venv/"
if [ ! -d $ENV_PATH ];
then
    python -m venv .venv
    echo "set -a && source ./.env && set +a">> .venv/Scripts/activate
fi

source .venv/Scripts/activate

docker-compose stop

docker compose up -d

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

alembic --config ./config/alembic.ini revision --autogenerate
alembic --config ./config/alembic.ini upgrade head
