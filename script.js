var messages = document.querySelector('#message');
let words = document.querySelector('#words');
let letters = document.querySelector('#letters');
let spaces = document.querySelector('#spaces');
let characters = document.querySelector('#characters');

var arr = [];
var flag = 0; 

function getKey(e){
  if(window.event){
    var key = e.keyCode;
    //console.log(key);
    handler(key);
  }
}

function handler(key) {
  var lettersCount = 0;
  var spaceCount = 0;
  var wordsCount = 0;
  var charactersCount = 0;

  if((key >= 48 && key <= 226) || key == 32){ 
    arr[flag] = key;
    //console.log(arr);
    flag++;
    countFunc();
  }
  else if(key == 8){
    if(arr.length > 0){
      deleteFunc(characters.textContent, letters.textContent, words.textContent, spaces.textContent);
    }
  }
  else if(key == 17){
    messages.focus();
  }
  
  function countFunc(){
    if(arr[0] != 32){
      wordsCount++;
      words.textContent = wordsCount;
      for(let i=0; i<arr.length;i++)
      {
        if((arr[i]>= 65 && arr[i]<= 90) || (arr[i]>= 97 && arr[i]<= 122)){
          lettersCount++;
          letters.textContent = lettersCount;
        }
        if(arr[i] == 32){
          spaceCount++;
          spaces.textContent = spaceCount;
        }
        if((arr[i-1] == 32) && (arr[i]>= 33 && arr[i]<= 226)){
          wordsCount++;
          words.textContent = wordsCount;
        }
        if(arr[i] >= 32 && arr[i] <= 226){
        charactersCount++;
        characters.textContent = charactersCount;
        }
      }
    }
    else if(arr[0] == 32){
      arr.pop();
      arr.length = 0;
      flag = 0;
    }
  }

  function deleteFunc(char, lett, word, spac){
    var j =  arr.length-1;
    if(arr[j] >= 32 && arr[j] <= 226){
      char = parseInt(char) - 1;
      characters.textContent = char;
    }
    if((arr[j]>= 65 && arr[j]<= 90) || (arr[j]>= 97 && arr[j]<= 122)){
      lett = parseInt(lett) - 1;
      letters.textContent = lett;
    }
    if(arr[j] == 32){
      spac = parseInt(spac) - 1;
      spaces.textContent = spac;
    }
    if((arr[j-1] == 32 && (arr[j]>= 33 && arr[j]<= 226)) || (arr.length == 1)){
      word = parseInt(word) - 1;
      words.textContent = word;
    }
    arr.pop();
    flag--; 
  }
}