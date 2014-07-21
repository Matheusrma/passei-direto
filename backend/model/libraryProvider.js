var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

LibraryProvider = function(host, port, callback) {
  this.db = new Db('passei-direto', new Server(host, port, {auto_reconnect: true},{}), {safe:true});
  this.db.open(function(){
    callback();
  });
};

LibraryProvider.prototype.getCollection= function(callback) {
  this.db.collection('library', function(error, library_collection) {
    if( error ) callback(error);
    else callback(null, library_collection);
  });
};

LibraryProvider.prototype.findAll = function(callback) {
  this.getCollection(function(error, library_collection) {
    if( error ) callback(error)
    else {
      library_collection.find().toArray(function(error, results) {
        if( error ) callback(error)
        else callback(null, results)
      });
    }
  });
};

LibraryProvider.prototype.findById = function(albumId, callback) {
  this.getCollection(function(error, library_collection) {
    if( error ) callback(error)
    else {
      library_collection.find({_id:ObjectID(albumId)}).toArray(function(error, results) {
        if( error ) callback(error)
        else{

          if (results.length == 0) callback("No results");
          else callback(null, results[0])
        } 
      });
    }
  });
};

LibraryProvider.prototype.insert = function(album, callback) {
  this.getCollection(function(error, library_collection) {
    if( error ) callback(error)
    else {
      library_collection.insert(album, function() {
        callback(null, album);
      });
    }
  });
};

LibraryProvider.prototype.update = function(album, callback) {
  this.getCollection(function(error, library_collection) {
    if( error ) callback(error)
    else {
      album._id = ObjectID(album._id);
      library_collection.update({_id:ObjectID(album._id)}, album, function(err, result) {
        callback(null, album);
      });
    }
  });
};

LibraryProvider.prototype.del = function(albumId, callback) {
  this.getCollection(function(error, library_collection) {
    if( error ) callback(error)
    else {
      library_collection.remove({_id:ObjectID(albumId)}, function(err, result) {
        callback(null);
      });
    }
  });
};

exports.LibraryProvider = LibraryProvider;