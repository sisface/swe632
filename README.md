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

MONGODB COMMANDS
- Start MongoDB: `~/ui-site/resources $ mongo`
- Use production database: `use production;`
- Show collections: `show collections;`
- Find the first record: `db.airports.findOne();`
- Control-C to exit.

GIT COMMANDS
- Clone repository: `git clone git@github.com:sisface/ui-site.git`
- Get current version of the project: `git pull --rebase`
- Commit changes: `git commit -am 'Message here'`
- Push: `git push`

