// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var app = require("pcad3");
d3.tsv('../data/usarrests.tsv', function(error, data) {

  data.forEach(function(d) {
    d.component1 = +d.component1;
    d.component2 = +d.component2;
  });

  var options = {
    el: rootDiv,
    title: "US Arrests",
    unique_id: "state",
    domain: ['Republican', 'Democrat'],
    domain_colours: ['blue', 'green'],
    margin: {
      top: 80,
      right: 20,
      bottom: 30,
      left: 40
    },
    height: 600,
    width: 960,
    x_axis_title: "Principal Component #1",
    y_axis_title: "Principal Component #2",
    shape: 'square',
    point_class: 'states',
    tooltip_name: function(d, this_object) {
      name = d[this_object.unique_id] + '| |' + d[this_object.x_column] + ' ' + d[this_object.y_column];
      return name;
    },

    data: data
  };
  var inst = new app(options);
  inst.on("pointClick", function(objEvent) {
    alert('You just clicked ' + objEvent.data_object.state);
  });
});
