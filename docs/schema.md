# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## projects
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
url                | string    | not null
description        | text      | not null
main_image_url     | string    | optional
end_date           | string    | not null
funding_goal       | integer   | not null
details            | text      | optional
creator_id         | integer   | not null, foreign key (references users), indexed
category_id        | integer   | not null, foreign key (references categories), indexed

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects), indexed
title        | string    | not null
amount       | integer   | not null
limit        | integer   | not null
description  | text      | not null
deliver_date | string    | optional

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
