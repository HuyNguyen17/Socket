# CEN3031
Group Project - The Socket

# Setup Instructions

1. Follow the instructions in the database.sql server to set up a local database
2. On a terminal, go to the server folder directory then run npm start
3. If necessary, download any additoinal packages such as nodemon
4. When you send npm start, you should see "Server listening on port 3001"
5. There are two ways now you can test the server.js file:
For "get", on your local browser enter "http://localhost:3001/login" or whatever you are trying to test
RECOMMENDED: download the software called "Postman". Enter the type of request (get,post,etc.) with the URL and click send.

Make sure to add the following to your .env file in the server folder
PORT=3001
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=(*whatever password you made*)
PGDATABASE=socket
PGPORT=5432
JWT_SECRET=mysecretkey