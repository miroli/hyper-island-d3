var populationData = [15000, 59000, 90000];

var svg = d3.select('#chart')
  .append("svg")
  .attr('width', 1000)
  .attr('height', 500);

var rectangles = svg.selectAll('rect')
  .data(populationData);

var scale = d3.scale.linear()
  .domain([0, 90000])
  .range([0, 800]);

var xAxis = d3.svg.axis()
  .ticks(5)
  .orient('bottom')
  .scale(scale);

var axisContainer = svg.append('g')
  .classed('axis', true)
  .attr('transform', 'translate(10, 340)')
  .call(xAxis);

var enteringRectangles = rectangles.enter()
  .append('rect')
  .attr('width', function(d) { return scale(d); })
  .attr('height', 100)
  .attr('x', 10)
  .attr('y', function(d, i) { return i * 100 * 1.1; })
  .attr('fill', 'tomato')

enteringRectangles.on('mouseover', function() {
  d3.select(this).attr('fill', 'brown');
});

enteringRectangles.on('mouseout', function() {
  d3.select(this).attr('fill', 'tomato');
});

enteringRectangles.on('click', function(d) {
  var paragraph = d3.select('body').selectAll('p')
    .data(d3.select(this));

  paragraph.enter()
    .append('p')
    .classed('legend', true)
    .text(function() {
      return 'This city has a population of ' + d + ' people';
    });

  paragraph.text(function() {
    return 'This city has a population of ' + d + ' people';
  })
});
