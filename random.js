random = function(array) {

  var randomNum = Math.floor(Math.random() * array.length)

  return array[randomNum];

}
$("#random").on("click", function() {
  $(".sunnyVale").show().text(random(sunnyVale));
});

var sunnyVale = [
  'Ricky',
  'Julian',
  'Bubles',
  'Lahey',
  'Randy'
]
