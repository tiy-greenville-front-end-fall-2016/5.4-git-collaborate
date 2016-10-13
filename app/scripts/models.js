var $ = require('jquery');

function CuteAnimal(config){
    config = config || {};
    $.extend(this, config);
    this.isCute = true;
}
CuteAnimal.prototype.speak = function(){
  return 'squeek';
};
CuteAnimal.prototype.playWithToy = function(sound){
  return sound + ', ' + sound;
};


function Puppy(config){
  // CuteAnimal();
  // new CuteAnimal();
  // CuteAnimal.call(this)
  CuteAnimal.call(this, config);
}
Puppy.prototype = new CuteAnimal();
Puppy.prototype.speak = function(){
  return 'tiny bark';
};


function Kitten(config){
  CuteAnimal.call(this, config);
}
Kitten.prototype = new CuteAnimal();


module.exports = {
  'CuteAnimal': CuteAnimal,
  'Puppy': Puppy,
  'Kitten': Kitten
};
