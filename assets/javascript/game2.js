

  var currentword;
  var underscore = [];
  var guessesleft = 10;
  var wrongwords = [];
  var usergusses = [];
  var words = ["cat", "dog","Cow"]
  var wins = 0;
  var loss = 0;
  
  function startgame ()
{
  currentword = words[Math.floor(Math.random()* words.length)];
  console.log(currentword);

  for(var i = 0; i<currentword.length; i++)
  {
    //console.log(i);
    underscore.push('_');
    console.log(underscore);
  }
  //document.getElementById('word-blanks').textContent = underscore.join("");

 var k = document.getElementById('guessleft') ;
  
k.textContent = guessesleft;

    
 }
document.onkeyup = function(event)
{
  userguess = event.key;
 //console.log(userguess);
 console.log(currentword.indexOf("l"));
 console.log(userguess);
 if(currentword.indexOf(usergusses) > -1){
   console.log('yes');
   //console.log(currentword.indexOf(usergusses));
   
 }
 else{
  wrongwords.push(userguesses);
  guessesleft --;
  console.log(wrongwords);
  console.log(guessesleft);
 }
}

//Main
 startgame();
/* 
var generateunderscore = function ()
{
    for (var i =0; i<currentword.length; i++){
   underscore.push("_");
    }
    return underscore;
}

console.log(generateunderscore());


document.addEventListener ("keypress", function(event){
   // var keycode = event.keyCode;
    //console.log(keycode);
  //  var keyword = String.fromCharCode(keycode);
   // console.log(keyword);
    // shortcut way to write 
    var keycode = String.fromCharCode(event.keyCode);
   if(currentword.indexOf(keycode)> -1){
    // console.log(true);
    // add to right word 
    
    rightword.push(keycode);
    console.log(rightword);
 }
    
    {

    
       wrongword.push(keycode);
       console.log(wrongword);
 
  }
  

    underscore[currentword.indexOf(keycode)] = keycode;
    if(underscore.join('') == currentword){
      alert('you win');
    }



    

}); */
