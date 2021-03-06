/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./backend/routes/'),
  api = require('./backend/routes/api'),
  http = require('http'),
  path = require('path');


var app = module.exports = express();

/**
* Configuration
*/
// all environments

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 

// Routes
app.get('/', routes.index);
app.get('/partial/:name', routes.partial);

// JSON API
app.get('/api/albums/:albumId', api.album);

app.get('/api/albums', api.albums);
app.post('/api/albums', api.insertAlbum);
app.put('/api/albums', api.updateAlbum);
app.del('/api/albums/:albumId', api.deleteAlbum);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

/**
* Starts Server
*/
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});