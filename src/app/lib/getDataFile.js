const fs = require( 'fs' );
const path = require( 'path' );

const dataPath = path.resolve( __dirname, '../data' );

function csvToArray( csv ){

	var data = csv.split( '\n' );
	
	data.shift(); //remove the label

	return data.map( ( line ) => line.split( ',' ) );
}

function getFilePath( name ){

	return  ( dataPath + '/' + name + '.csv' );
}

module.exports = function( name, cb ){

	fs.readFile( getFilePath( name ), 'utf-8', ( err, data ) => {

		if( err ){

			cb( err );

		} else {

			cb( null, csvToArray( data ) );
		}
	} );
};