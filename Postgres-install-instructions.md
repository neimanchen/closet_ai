# Suggested PostgreSQL installation instructions

  **These instructions are to install postres locally on a mac for testing purposes.**

## Instructions via Homebrew only:

### First, make sure your Homebrew is up to date.

`brew update`

> this is suggested

### Then, upgrade everything within homebrew.

`brew upgrade`

> this will take a while to complete, and is a safety precaution

### To install postgres

`brew install postgresql`

### Starting/Stopping Postgres

*starting*
`brew services start postgresql`

*stopping*
`brew services stop postgresql`

postgres will be running on port 5432

## Creating Database

Run the following in command line:

***Suggested***
`CREATEDB closet_ai`

Log into postgresql from your newly created databases:
`psql closet_ai`

## Setting up Users and Permissions

You will need to setup a user to be able to access your DB so you don't use the root user (which is just *bad form*)

While logged into postgresql, create a new user role:
***Suggested***
`CREATE ROLE closet_ai PASSWORD '[password]';`

To check if your user was created, run the following in psql:
`SELECT USER [username] FROM pg_user;`

**This username and password combination you will use with sequelize**

## Grant user Database Permissions

Postgres Users must be granted access to your database, so while still logged in as root you'll need to grant permissions to your user so they can access your database

Run the following in psql:

***Suggested***
`GRANT ALL PRIVILEGES ON DATABASE closet_ai TO [username];`


## That's all for setup

### List of Useful Commands in psql
`\?` help
`\l` list databases
`\c` db_name - connect to database
`\q` quits psql terminal

[other useful stuff](https://www.postgresql.org/docs/10/static/app-psql.html)
