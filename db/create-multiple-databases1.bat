@echo off
setlocal enabledelayedexpansion

:create_user_and_database
set database=%1
echo Creating user and database '%database%'
psql -v ON_ERROR_STOP=1 --username "!POSTGRES_USER!" -c "CREATE USER %database% WITH LOGIN PASSWORD 'password'; CREATE DATABASE %database%; GRANT ALL PRIVILEGES ON DATABASE %database% TO %database%;"

if defined POSTGRES_MULTIPLE_DATABASES (
echo Multiple database creation requested: %POSTGRES_MULTIPLE_DATABASES%
for %%i in (%POSTGRES_MULTIPLE_DATABASES%) do (
call :create_user_and_database %%i
)
echo Multiple databases created
)

endlocal