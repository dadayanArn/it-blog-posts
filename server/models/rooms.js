'use strict';
var app = require('../../server/server'); //require `server.js` as in any node.js app

module.exports = function(Rooms) {
  Rooms.status = function(cb) {
    const datasource = app.datasources.db;
    datasource.connector.connect(function(err, db) {
      const entyties = ['rooms', 'booking', 'visitors']
      Promise.all([
        db.collection("rooms").countDocuments(),
        db.collection("roomBookings").countDocuments(),
        db.collection("visitors").countDocuments()
      ]).then(response => {
        const counts = {}; 
        response.forEach((r, i) => {
          counts[entyties[i]] = r;
        });
        cb(null, counts);
      });
    });
    };
  Rooms.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'object'
      }
    }
  );
};
