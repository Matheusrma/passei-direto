var host = 'localhost';
var port = 27017;

exports.album = function(req, res){
  var LibraryProvider = require('../model/libraryProvider.js').LibraryProvider;
  
  var libraryProvider = new LibraryProvider(host, port,function(){
    libraryProvider.findById(req.params.albumId ,function(error, docs){
      if (error != null){
        res.send('ERROR', 404);
      }
      else {
          res.json(docs); 
      }
    });
  });
}

exports.albums = function(req, res){
  var LibraryProvider = require('../model/libraryProvider.js').LibraryProvider;

  var libraryProvider = new LibraryProvider(host, port,function(){
    libraryProvider.findAll(function(error, docs){
        res.json(docs); 
    });
  });
}

exports.updateAlbum = function(req, res){
  var LibraryProvider = require('../model/libraryProvider.js').LibraryProvider;
  
  var libraryProvider = new LibraryProvider(host, port,function(){
    libraryProvider.update(req.body, function(error, docs){
        res.json(docs); 
    });
  });
}

exports.deleteAlbum = function(req, res){
  var LibraryProvider = require('../model/libraryProvider.js').LibraryProvider;
  
  var libraryProvider = new LibraryProvider(host, port,function(){
    libraryProvider.del(req.params.albumId, function(error, docs){
        res.json(docs); 
    });
  });
}

exports.insertAlbum = function(req, res){
  var LibraryProvider = require('../model/libraryProvider.js').LibraryProvider;
  
  var libraryProvider = new LibraryProvider(host, port,function(){
    libraryProvider.insert(req.body, function(error, docs){
        res.json(docs); 
    });
  });
}