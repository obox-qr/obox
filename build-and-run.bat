@echo off

if not exist ".env.example" (
  echo .env.example file not found!
  exit /b 1
)

if not exist ".env" (
  copy .env.example .env
  echo .env file created successfully.
) else (
  echo .env file already exists. Skipping creation.
)

docker-compose -f dockercompose.yml up --build
