$(document).ready(function() {
  displayPoke();
});

function displayPoke()
{
  for(var i=1;i<152;i++)
  {
    var newimg='<img id=pokepic src="http://pokeapi.co/media/img/'+i+'.png">';
    $('div').append(newimg);
  }
}
