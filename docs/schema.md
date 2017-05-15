# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## projects
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
creator_id         | integer   | not null, foreign key (references users), indexed
category_id        | integer   | not null, foreign key (references categories), indexed
title              | string    | not null
url                | string    | not null
description        | text      | not null
category           | string    | not null
main_image_url     | string    | not null
end_date           | string    | not null
funding_goal       | integer   | not null
details            | text      | optional

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects), indexed
title        | string    | not null
amount       | float     | not null
limit        | int       | not null
description  | text      | not null
deliver_date | string    | not null

## pledges
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
reward_id   | integer   | not null, foreign key (references rewards), indexed
backer_id   | integer   | not null, foreign key (references users), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
