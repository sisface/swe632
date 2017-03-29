# ui-site

SOFTWARE NEEDED
- node.js
- MongoDB
- npm

SETUP
- Run: `npm install`.
- Install [MongoDB](http://docs.mongodb.com/manual/installation/) on your platform .
- Make sure MongoDB is running, then ingest data: `mongoimport -host localhost:27017 -db production -collection airports airports.json --jsonArray`  (Note: only do this once).

TO RUN
- Run: `mongod`.
- Run: `node server.js`.
