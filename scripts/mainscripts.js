$( document ).ready(function() {
  new WOW().init();
});
$( ".wow" ).addClass( "fadeIn" );
/* Reveal Animation */

am4core.ready(function() {
	function am4themes_SkillRadarChart(target) {
		if (target instanceof am4charts.AxisRenderer){
			target
			target.grid.template.strokeWidth = 4;
			target.grid.template.opacity = 0.5;
		}
		if (target instanceof am4charts.CategoryAxis){
			target.strokeWidth = 0.8;
			target.fontSize = 18;
			target.fontFamily = "Calibri";
		}
		if (target instanceof am4charts.ValueAxis){
			target.min = 0;
			target.max = 10;
			target.strictMinMax = true;
			target.strokeWidth = 1;
			target.strokeOpacity = 0.4;
		}
		if (target instanceof am4charts.RadarSeries){
			target.strokeWidth = 3;
			target.fillOpacity = 0.2;
		}
		if (target instanceof am4charts.CircleBullet){
			target.fillOpacity = 0.7;
			target.strokeWidth = 1;
		}
	}

	// Themes begin
	am4core.useTheme(am4themes_animated);
	am4core.useTheme(am4themes_SkillRadarChart)
	// Themes end
	
	function makeSkillChart(div_id, chartData, skillName, skillCategory, labelColor, gridColor, bulletColor, seriesColor, titleColor){
		/* Create chart instance */
		var chart = am4core.create(div_id, am4charts.RadarChart);

		/* Add data */
		chart.data = chartData;
		chart.responsive.enabled = true;

		/* Create axes */
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = skillCategory;
		categoryAxis.stroke = labelColor;
		categoryAxis.renderer.grid.template.stroke = gridColor;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.gridType = "polygons";
		valueAxis.renderer.grid.template.stroke = gridColor;
		valueAxis.stroke = labelColor;

		/* Create and configure series */
		var series = chart.series.push(new am4charts.RadarSeries());
		series.dataFields.valueY = "value";
		series.dataFields.categoryX = skillCategory;
		series.name = skillName;
		series.stroke = bulletColor;
		series.fill = seriesColor;
		
		var bullet = series.bullets.push(new am4charts.CircleBullet());
		bullet.fill = bulletColor;
		
	
	}
	
	PLData = [ {
	  "language": "Python",
	  "value": 9
	}, {
	  "language": "Matlab",
	  "value": 9
	}, {
	  "language": "Java",
	  "value": 7
	}, {
	  "language": "C/C++",
	  "value": 9
	}, {
	  "language": "HTML/CSS",
	  "value": 7
	}, {
	  "language": "Javascript",
	  "value": 5
	}, {
	  "language": "VHDL",
	  "value": 5
	}, {
	  "language": "Verilog",
	  "value": 8
	}, {
	  "language": "Assembly",
	  "value": 8
	} ];
	makeSkillChart("chartPLdiv", PLData, "Programming Languages", "language", "#dddddd", "#bbbbbb", "#cc8500", "#bb4500", "#ffffff");
}); // end am4core.ready()
/* Radar Charts */

var i = 0;
var txt = '<h1>Hi, Welcome to my website.</h1>';
var ElementID = "HeadTW";

function typeWriter() {
	var speed = 120;
	if (i < txt.length) {
		document.getElementById(ElementID).innerHTML += txt.charAt(i);
		i++;
		if (i == txt.length) speed = 400;
	}
	else {
		document.getElementById(ElementID).innerHTML = txt;
	}
	setTimeout(typeWriter, speed);
}

typeWriter();

/* Typewriter */