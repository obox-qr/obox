#!/bin/bash

# Check if .env.example exists
if [ ! -f .env.example ]; then
  echo ".env.example file not found!"
  exit 1
fi

# Check if .env already exists
if [ ! -f .env ]; then
  # Copy .env.example to .env
  cp .env.example .env
  echo ".env file created successfully."
else
  echo ".env file already exists. Skipping creation."
fi

# Run docker-compose with the specified file
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml build --no-cache
docker-compose -f docker-compose.dev.yml up