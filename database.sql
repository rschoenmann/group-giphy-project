CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('baconian'), ('cartoon'), ('nsfw'), ('meme');

-- I made our favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "gif_url" VARCHAR(150) NOT NULL,
    "cat_id" INT REFERENCES "category"
);