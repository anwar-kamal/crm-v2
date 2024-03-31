if ( document.getElementById( 'chartdiv' ) ) {
	am5.ready( function () {
		var root = am5.Root.new( "chartdiv" )
		root.setThemes( [
			am5themes_Animated.new( root )
		] )
		var chart = root.container.children.push(
			am5percent.PieChart.new( root, {
				endAngle: 270,
				layout: root.verticalLayout,
				innerRadius: am5.percent( 60 )
			} )
		)
		var series = chart.series.push(
			am5percent.PieSeries.new( root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			} )
		)
		series.set( "colors", am5.ColorSet.new( root, {
			colors: [
				am5.color( 0x2B6DF0 ),
				am5.color( 0xeebd40 ),
			]
		} ) )
		var gradient = am5.RadialGradient.new( root, {
			stops: [
				{ color: am5.color( 0x7a6223 ) },
				{}
			]
		} )
		series.labels.template.set( "text", "{value}" )
		series.slices.template.setAll( {
			fillGradient: gradient,
			strokeWidth: 2,
			stroke: am5.color( 0xffffff ),
			cornerRadius: 10,
			shadowOpacity: 0.01,
			shadowOffsetX: 9,
			shadowOffsetY: 9,
			shadowColor: am5.color( 0x00000010 ),
			fillPattern: am5.GrainPattern.new( root, {
				maxOpacity: 0.01,
				density: 0.01,
				colors: [ am5.color( 0x00000099 ) ]
			} )
		} )

		// Set data
		series.data.setAll( [ {
			category: "Satisfied",
			value: 650
		}, {
			category: "Unsatisfied",
			value: 200
		} ] )
		var legend = chart.children.push( am5.Legend.new( root, {
			centerX: am5.percent( 50 ),
			x: am5.percent( 50 ),
			marginTop: 5,
			marginBottom: 5,
		} ) )
		legend.markerRectangles.template.adapters.add( "fillGradient", function () {
			return undefined
		} )
		legend.data.setAll( series.dataItems )
		series.appear( 2000, 100 )
	} )
}
