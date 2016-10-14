mi.bar = function( elem ){

	var trace1 = {
		x: [ 'one', 'two', 'three', 'four' ],
		y: [ 1, 4, 9, 16 ],
		name: 'target',
		type: 'bar'
	};

	var trace2 = {
		x: [ 'one', 'two', 'three', 'four' ],
		y: [ 6, 7, 12, null ],
		name: 'bonus',
		type: 'bar'
	};


	var data = [ trace1, trace2 ];
	var layout = {
		xaxis: { title: 'Team' },
		yaxis: { title: 'Target amount' },
		barmode: 'relative',
		title: 'Targets'
	};

	Plotly.newPlot( elem , data, layout, { showLink: false, displayModeBar: false } );
};