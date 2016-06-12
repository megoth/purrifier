function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var sounds = [
  'sounds/purr1.mp3', 
  'sounds/purr2.mp3'
];
var pictures = [
  'pictures/cat_hangover_bed.jpg',
  'pictures/cat_relax_chill_out.jpg',
  'pictures/cat_sleep_feel_at_home.jpg',
  'pictures/cats_cute_kitten.jpg',
  'pictures/hangover_cat_siamese_cat.jpg'
];

function getPlayer() {
  var player = document.createElement('AUDIO');
  var randomPurr = sounds[getRandomArbitrary(0, sounds.length - 1)];
  player.setAttribute('src', randomPurr);
  return player;
}

function getPicture() {
  var image = document.createElement('IMG');
  var randomImage = pictures[getRandomArbitrary(0, pictures.length - 1)];
  image.setAttribute('src', randomImage);
  return image;
}

function play() {
  var player = getPlayer();
  player.play();
  
  var picture = document.getElementById('CatPicture');
  var children = picture.children;
  for (var i = 0; i < children.length; i++) {
    picture.removeChild(children[i]);
  }
  picture.appendChild(getPicture());

  player.onloadedmetadata = function () {
    var timeUntilNextPlay = (player.duration - player.currentTime - 0.5) * 1000;
    setTimeout(play, timeUntilNextPlay);
  };
}

document.addEventListener('DOMContentLoaded', function() {
  play();
});
