const getDataFile = require( './lib/getDataFile' );

module.exports = function( app ){

	app.get( '/', ( req, res ) => {

		getDataFile( 'map', ( err, mapData ) => {

			if( err ){

				console.dir( err );
				res.render( 'error' );

			} else {

				res.render( 'index', {
					mapData
				} );
			}
		} );
	} );
};