DROP TABLE IF EXISTS anonymousposts;

CREATE TABLE anonymousposts (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    pseudonym varchar(50) NOT NULL,
    body varchar(1000) NOT NULL
);

INSERT INTO anonymousposts (title, pseudonym, body) 
VALUES
    ('Test Post', 'Tara', 'This is a test post' );