var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/listTemplate.hbs');

console.log(models);


// wait for DOM to be ready
$(function(){

  // all my code here
  var favoritePuppy;

  var puppies = [
    new models.Puppy({name: 'Crusoe', image: 'http://www.celebritydachshund.com/wp-content/uploads/2016/04/Dr.-Crusoe-1.jpg'}),
    new models.Puppy({name: 'Sherlock', image: 'http://images6.fanpop.com/image/photos/33000000/Hipster-Puppy-puppies-33066415-246-310.jpg'})
  ];

  var context = {
    'puppies': puppies
  }

  $('.js-puppies').html(listTemplate(context));

  $('.js-cute-puppy').on('click', function(event){
    event.preventDefault();

    var $puppyImage = $(this);
    var puppyName = $puppyImage.data('puppy-name');
    favoritePuppy = _.filter(puppies, {'name': puppyName})[0];

    console.log(favoritePuppy);
  });

  $('.js-speak').click(function(event){
    event.preventDefault();

    if(favoritePuppy){
      alert('My name is ' + favoritePuppy.name + ' and I have a ' + favoritePuppy.speak());

      window.setTimeout(function(){
        var toySound = favoritePuppy.playWithToy('squeek');
        alert('My toy goes ' + toySound);
      }, 2000);

    }else{
      alert('Please select a puppy');
    }

  });

});
