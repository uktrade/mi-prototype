'use strict';

const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const path = require( 'path' );
const logger = require( 'morgan' );

const config = require( './config' );
const routes = require( './routes' );

const pathToPublic = path.resolve( __dirname, '../public' );
const app = express();

app.set( 'view engine', 'html' );

nunjucks.configure( 'src/app/views', {
	autoescape: true,
	watch: config.isDev,
	noCache: config.isDev,
	express: app
} );

app.use( logger( ( config.isDev ? 'dev' : 'combined' ) ) );
app.use( '/public', express.static( pathToPublic ) );

routes( app );

app.listen( config.port, function(){

	console.log( 'App running in %s mode, listening on port %s', config.mode, config.port  );
} );