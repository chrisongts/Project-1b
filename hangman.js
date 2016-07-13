window.onload = function() {

    var charSelcted = ' ';

    var start = document.getElementById('start');
    start.addEventListener('click', startGame);



    function wordsSet() {

      words = ['authoritative', 'comprehensive', 'mischievous',
               'provisional', 'hypocritical', 'repository',
               'undertaker', 'extradition', 'presumptuous',
               'skyscraper', 'conclusive', 'breakthrough',
               'relinquish', 'transcribe', 'disruption',
               'underwrite', 'extinguish', 'commendable',
               'reciprocate', 'waterfront'];

    } // end of wordsSet

    function selectWord() {

      searchWord = true;
      numOfWrongAttemp = 0;
      charUsed = [];

      start.removeEventListener('click', startGame);



      while (searchWord) {
        random = Math.random();
        console.log(random);
        if ( random < .193 ) {
          random *= 100;
          index = Math.round(random);
          searchWord = false;
        };
      };

      word = document.getElementById('word');

      wordSelected = words[index];
      answer = wordSelected.split('');

      searchWord = true;

      result = [];
      position = [];

      for ( i = 0; i < answer.length; i++ ) {
        result[i] = '_';
      }  // fill '-' to array result

      for ( i = 0; i < answer.length; i++ ) {
        if ( answer[i] === 'a' || answer[i] === 'e' || answer[i] === 'i' ||
             answer[i] === 'o' || answer[i] === 'u') {
             result[i] = answer[i];
             position.push(i);
           } else {
             checking = answer[i];
             checkingPos = i;
             found = false;
             for ( j = i + 1; j < answer.length; j++) {
               if ( answer[j] === checking ) {
                 found = true;
                 position.push(j);
                 result[j] = answer[j];
               }
             }   // end of checing for-loop
             if (found) {
               position.push(checkingPos);
               result[checkingPos] = answer[checkingPos];
             } // end of if found
           }
      } // end of first for-loop checking for a e i o u and repeated chars

      displayWord = [];
      for ( i = 0; i < answer.length; i++ ) {
        displayWord[i] = '_';
      }  // fill '-' to array result

      count = 0;

      for ( i = 0; i < answer.length; i++ ) {
        if ( position.indexOf(i) === -1 && count >= 2 ) {
          displayWord[i] = '_';
        } else
          if ( position.indexOf(i) === -1 ) {
                displayWord[i] = answer[i];
                count++;
              }
        }  //end of for-loop

      showWord = displayWord.join('');

      word.innerHTML = showWord;

  }   // end ofselectWord()

    wordsSet();

    function checkInput() {

      if (event.target === document.getElementById('A')) {
        charSelcted = 'a';
      };
      if (event.target === document.getElementById('B')) {
        charSelcted = 'b';
      };
      if (event.target === document.getElementById('C')) {
        charSelcted = 'c';
      };
      if (event.target === document.getElementById('D')) {
        charSelcted = 'd';
      };
      if (event.target === document.getElementById('E')) {
        charSelcted = 'e';
      };
      if (event.target === document.getElementById('F')) {
        charSelcted = 'f';
      };
      if (event.target === document.getElementById('G')) {
        charSelcted = 'g';
      };
      if (event.target === document.getElementById('H')) {
        charSelcted = 'h';
      };
      if (event.target === document.getElementById('I')) {
        charSelcted = 'i';
      };
      if (event.target === document.getElementById('J')) {
        charSelcted = 'j';
      };
      if (event.target === document.getElementById('K')) {
        charSelcted = 'k';
      };
      if (event.target === document.getElementById('L')) {
        charSelcted = 'l';
      };
      if (event.target === document.getElementById('M')) {
        charSelcted = 'm';
      };

      if (event.target === document.getElementById('N')) {
        charSelcted = 'n';
      };
      if (event.target === document.getElementById('O')) {
        charSelcted = 'o';
      };
      if (event.target === document.getElementById('P')) {
        charSelcted = 'p';
      };
      if (event.target === document.getElementById('Q')) {
        charSelcted = 'q';
      };
      if (event.target === document.getElementById('R')) {
        charSelcted = 'r';
      };
      if (event.target === document.getElementById('S')) {
        charSelcted = 's';
      };
      if (event.target === document.getElementById('T')) {
        charSelcted = 't';
      };
      if (event.target === document.getElementById('U')) {
        charSelcted = 'u';
      };
      if (event.target === document.getElementById('V')) {
        charSelcted = 'v';
      };
      if (event.target === document.getElementById('W')) {
        charSelcted = 'w';
      };
      if (event.target === document.getElementById('X')) {
        charSelcted = 'x';
      };
      if (event.target === document.getElementById('Y')) {
        charSelcted = 'y';
      };
      if (event.target === document.getElementById('Z')) {
        charSelcted = 'z';
      };

      console.log(charSelcted);

      compareStdAns();

      wonGame();

    } // end of check()

  function startGame() {

    wrong = document.getElementById('wrong-attemp');
    wrong.innerHTML = ' ';
    letter = document.getElementById('letters-used');
    letter.innerHTML = ' ';

    selectWord();

    console.log(answer);

    var buttons = document.getElementById('buttons');
    buttons.addEventListener('click', checkInput);

  }   // end of startGame()

  function compareStdAns() {

    if ( answer.indexOf(charSelcted) === -1 ) {
      console.log('Wrong input');
      numOfWrongAttemp++;
      console.log(numOfWrongAttemp);
      wrong = document.getElementById('wrong-attemp');
      wrong.innerHTML = numOfWrongAttemp;
      console.log(wrong.innerHTML);
    } else {
      index = answer.indexOf(charSelcted);
      displayWord[index] = charSelcted;
      for ( index + 1; index < answer.length; index++ ) {
        if ( answer[index] === charSelcted ) {
          displayWord[index] = charSelcted;
        };

        showWord = displayWord.join('');
        word.innerHTML = showWord;
    } // end of first if

    }

    charUsed.push(charSelcted);
    charUsed.sort();
    letterUsed = charUsed.join('');

    console.log(charUsed);
    console.log(letterUsed);
    letter = document.getElementById('letters-used');
    letter.innerHTML = letterUsed;
    console.log(letter);

  }  // end of compareStdAns()

  function wonGame() {

    if ( numOfWrongAttemp >= 6 ) {
      word.innerHTML = 'You lost !!!'
      restart();
    } else {
      if ( showWord === wordSelected) {
        word.innerHTML = 'You won !!!';
        restart();
      }
    }
  }  // end of wonGame()

  function restart() {

    start.addEventListener('click', startGame);

  }




  } // end of window onload
