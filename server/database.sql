-- description of how to setup SQL on local machine

-- step 1: download PostgreSQL 17.4
-- step 2: run "psql" (search for it on your computer)
-- step 3: select default server, database, port, username
--         enter your passowrd (MAKE SURE TO REMEMBER IT)
-- step 4: add the following to your .env file
-- PGUSER=postgres
-- PGHOST=localhost
-- PGPASSWORD=*whatever password you used*
-- PGDATABASE=socket
-- PGPORT=5432
-- step 5: run the following commands in psql

CREATE DATABASE socket;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    linkedin VARCHAR(255),
    major VARCHAR(255),
    year VARCHAR(20),
    description VARCHAR(5000),
    profile_pic bytea
    );
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE,
	linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea
);
>>>>>>> 849414f (Front-end only changes to make the websites look nicer.)
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea);
>>>>>>> 8642c5f (Added an option to create a project and save it to backend.)
=======
=======
>>>>>>> 6143ce1 (added posts.js)
=======
>>>>>>> 8685617 (Front-end only changes to make the websites look nicer.)
=======
>>>>>>> 736f096 (Added an option to create a project and save it to backend.)
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea);
=======
=======
>>>>>>> 9698984 (added posts.js)
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea);
=======
>>>>>>> 7ff91e0 (working on orgs)
<<<<<<< Updated upstream
CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(60) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE,
	linkedin VARCHAR(255),
	major VARCHAR(255),
	year VARCHAR(20),
	description VARCHAR(5000),
	profile_pic bytea
<<<<<<< HEAD
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE,
	linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea
>>>>>>> 849414f (Front-end only changes to make the websites look nicer.)
=======
>>>>>>> 7ff91e0 (working on orgs)
);
=======
=======
>>>>>>> b81b52c (added posts.js)
=======
>>>>>>> 2a0792e (Front-end only changes to make the websites look nicer.)
=======
>>>>>>> 386ac73 (Added an option to create a project and save it to backend.)
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    linkedin VARCHAR(255),
    major VARCHAR(255),
    year VARCHAR(20),
    description VARCHAR(5000),
    profile_pic bytea
    );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3c0f21c (working on orgs)
<<<<<<< HEAD
>>>>>>> 86fcde0 (working on orgs)
=======
>>>>>>> 9698984 (added posts.js)
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea);
>>>>>>> 8642c5f (Added an option to create a project and save it to backend.)
=======
>>>>>>> 3c0f21c (working on orgs)
>>>>>>> 7ff91e0 (working on orgs)
=======
=======
>>>>>>> b81b52c (added posts.js)
<<<<<<< HEAD
>>>>>>> 6143ce1 (added posts.js)
=======
=======
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE,
	linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea
);
>>>>>>> 849414f (Front-end only changes to make the websites look nicer.)
<<<<<<< HEAD
>>>>>>> 2a0792e (Front-end only changes to make the websites look nicer.)
<<<<<<< HEAD
>>>>>>> 8685617 (Front-end only changes to make the websites look nicer.)
=======
=======
=======
CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY, username VARCHAR(60) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, linkedin VARCHAR(255), major VARCHAR(255), year VARCHAR(20), description VARCHAR(5000), profile_pic bytea);
>>>>>>> 8642c5f (Added an option to create a project and save it to backend.)
>>>>>>> 386ac73 (Added an option to create a project and save it to backend.)
>>>>>>> 736f096 (Added an option to create a project and save it to backend.)

CREATE TABLE projects (id BIGSERIAL NOT NULL PRIMARY KEY, projectname VARCHAR(60) NOT NULL UNIQUE, description VARCHAR(5000), project_pic bytea);

CREATE TABLE organizations (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	organization_name VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(5000),
	org_pic bytea
);

--this is how likes can be implemented
--found by Laurenz Abe on stack overflow. 
CREATE TABLE likes (
   person_id bigint REFERENCES users(id) ON DELETE CASCADE,
   proj_id bigint REFERENCES projects(id) ON DELETE CASCADE,
   PRIMARY KEY (person_id, proj_id)
);

-- similarly, link users to projects and organizations
CREATE TABLE link_projects (
    user_id bigint REFERENCES users(id) ON DELETE CASCADE,
    proj_id bigint REFERENCES projects(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, proj_id)
);

CREATE TABLE link_organizations (
    user_id bigint REFERENCES users(id) ON DELETE CASCADE,
    org_id bigint REFERENCES organizations(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, org_id)
);

INSERT INTO users (username, password, email, linkedin, major, year, description) values ('firstuser', 'firstpassword', 'firstuser@ufl.edu', 'mylinkedin.com', 'Computer Engineering', '4th', 'Freshman ece student at UF!');
 
-- to connect to the database run \c socket
-- to reset/delete a table run DROP TABLE table_name;

-- other basic useful psql commands: 
-- \dt  
-- shows all of the tables in the DB
-- SELECT * FROM mytable;
-- shows all of the data inside of the table


--UPDATE users SET year = 2026 WHERE id = testuser