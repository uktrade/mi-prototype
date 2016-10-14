'use strict';

const env = process.env;
const mode = ( env.NODE_ENV || 'development' );

module.exports = {
	mode,
	port: ( env.PORT || 3000 ),
	isDev: ( mode === 'development' )
};