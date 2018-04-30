// array of words avaiable 
// choosen words
// letters in choosen words
// num blanks
// blank and sucesses
// wrong guess
// letter guessed
// wincounter
// lose counter
//numguessed

// array of words avaiable 

var words = ["cat","dog","cow"];

// choosen words

var choosenword = "";
// letters in choosen words

var lettersinchoosenword = [];

// num blanks

var numblanks = 0;

// blank and sucesses

var blankandsucesses = [];

// wrong guess
 var wrongguess = [];

 // letter guessed

 var letterguessed = "";

 // wincounter 

 var wincounter = 0;

 // losecounter

  var losecounter = 0;

  //numguessed

  var numguesses = 9 ;

  // functions 
  function startgame()
  {
    numguesses = 9 ;

  choosenword = words[Math.floor(Math.random()*words.length)];
  console.log(choosenword);
// when computer choose random word, that word is spilt into letters , that word is stored in the varaible called lettersinchoosenword
  
  lettersinchoosenword = choosenword.split("");
  //console.log(lettersinchoosenwords);

// the lenght of the lettersinchoosenword is stored in the variable called numblanks 
  
  numblanks = lettersinchoosenword.length;
  console.log(numblanks);

  blankandsucesses = [];

  wrongguess = [];


// here we are pushing _ in the blank and sucesses array 

  for (var i=0; i<numblanks; i++){
      blankandsucesses.push("_ ");
      document.getElementById('word-blanks').innerHTML = blankandsucesses.join(" ");
      console.log(blankandsucesses);
  }

 // document.getelementbyid manipulates the html 
document.getElementById("Guesses-left").innerHTML = numguesses;

//document.getElementById("word-blanks").innerHTML = blankandsucesses.join("");

document.getElementById("Wrong-guess").innerhtml =  wrongguess.join(" ");
  }
// this function will check the letter is present in the choosenwords, if it is it will stored in choosenword
// there is loop for that, numblanks 

// checkletter function is created with one argument , letter in word is set false so that no letter is there.
// loop is created , if the letter we enter is in the choosenword, then letterinowrd is set true which means letterin word will store letters.
function checkletter(letter)
{  
var letterinword = false;
var wrongGuessFound = false;
//check if letter pressed is in choosesword
if(choosenword.indexOf(letter) > -1)
{
  
  for (i=0;i<numblanks; i++){
    
    if(choosenword[i] === letter){
       blankandsucesses[i] = letter ;
       letterinword =true;
   }
  }
} 
  else {
  
  if(wrongguess.indexOf(letter) ==  -1 )
  {
    wrongguess.push(letter);
    console.log('wrongguess', wrongguess);
    numguesses--;
    console.log(numguesses);
  } 
  else {
    alert(letter + ' already pressed!!');
       }
  }
    document.getElementById('word-blanks').innerHTML = blankandsucesses.join(" ");
    document.getElementById('Wrong-guess').innerHTML = wrongguess.join(" ");
}
                    
function roundcomplete(){

    console.log("WinCount: " + wincounter + " | LossCount: " + losecounter + " | NumGuesses: " + numguesses);


                     
                    
                      document.getElementById("Guesses-left").innerHTML =  numguesses;
                      document.getElementById("word-blanks").innerhtml = blankandsucesses.join(" ");
                      document.getElementById("Wrong-guess").innerhtml = wrongguess.join(" ");

                      if( lettersinchoosenword.toString() === blankandsucesses.toString())
                      {
                         
                          document.getElementById("Wins").innerHTML = ++wincounter;
                          alert("you win");

                          startgame();
                      }
                      else if (numguesses == 0)
                      {
                          losecounter++;

                          document.getElementById("Losses").innerHTML = losecounter;
                          wrongguess=[];
                          document.getElementById('Wrong-guess').innerHTML = wrongguess.join("");


                          startgame();
                      }
                    }
                

                    startgame();

                    document.onkeyup = function(event) {
                        letterguessed = String.fromCharCode(event.which).toLowerCase();
                        checkletter(letterguessed); 
                        setTimeout(roundcomplete, 200);
                    };

