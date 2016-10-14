mi.scatter = function( elem ){

	var trace1 = {
		x: [ 1, 2, 3, 4 ],
		y: [ 10, 15, 13, 17 ],
		mode: 'lines+markers',
		type: 'scatter',
		name: 'user 1'
	};

	var trace2 = {
		x: [ 2, 3, 4, 5 ],
		y: [ 16, 5, 11, 9 ],
		mode: 'lines+markers',
		type: 'scatter',
		name: 'user 2'
	};

	var trace3 = {
		x: [ 1, 2, 3, 4 ],
		y: [ 12, 9, 15, 12 ],
		mode: 'lines+markers',
		type: 'scatter',
		name: 'user 3'
	};

	var data = [ trace1, trace2, trace3 ];

	Plotly.newPlot( elem, data, null, { showLink: false, displayModeBar: false } );
};