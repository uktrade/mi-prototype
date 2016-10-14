mi.map = function( elem, mapData ){

	function getRow( index ){

		var i = 0;
		var l = mapData.length;
		var rows = [];

		for( ; i < l; i++ ){

			rows.push( mapData[ i ][ index ] );
		}

		return rows;
	}

	var locations = getRow( 0 );

	var data = [{
		type: 'choropleth',
		locationmode: 'country names',
		locations: locations,
		z: getRow( 1 ),
		text: locations,
		autocolorscale: true
	}];

	var layout = {
		title: '',
		showlegend: false,
		showframe: false,
		showcoastlines: false,
		geo: {
			projection: {
				type: 'mercator'
			}
		}
	};

	Plotly.plot( elem, data, layout, { showLink: false, displayModeBar: false } );
};