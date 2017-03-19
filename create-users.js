// usage: mongo admin create-users.js
var a = {
    user: "admin",
    pwd: "admin",
    roles: ["userAdminAnyDatabase"]};
db.createUser(a);
var u = {
    user: "sisface",
    pwd: "sisface",
    roles: [{role: "readWrite", db: "production"}]};
db.createUser(u);