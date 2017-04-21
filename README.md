# ui-site

SOFTWARE NEEDED
- node.js
- MongoDB
- npm

SETUP
- Run: `npm install`.
- Install Bootstrap: `npm i mithril-bootstrap-modal`
- Install [MongoDB](http://docs.mongodb.com/manual/installation/) on your platform .
- Create db: 
-- `cd /`
-- `sudo mkdir data`
-- `cd data`
-- `sudo mkdir db`
-- `ll`
-- `chmod 777 db`
-- `sudo chmod 777 db`
-- `cd ..`
-- `sudo chmod 777 data`
- Make sure MongoDB is running, then ingest data: `mongoimport --db production --collection airports airports.json --jsonArray`  (Note: only do this once).

TO RUN
- Run: `mongod`.
- Run: `node server.js`.
- Type `localhost:8080` into browser address bar.

MONGODB COMMANDS
- Start the Mongo shell: `mongo`.
- Use production database: `use production;`.
- Show collections: `show collections;`.
- Find the first record: `db.airports.findOne();`.
- Control-C to exit.

GIT COMMANDS
- Clone repository: `git clone git@github.com:sisface/ui-site.git`.
- Get current version of the project: `git pull --rebase`.
- Commit changes: `git commit -am 'Message here'`.
- Push: `git push -u origin master`.
