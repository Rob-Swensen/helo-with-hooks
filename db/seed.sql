CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR(20),
    password TEXT,
    profile_pic TEXT
);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT references users(user_id)
);