window.onload = function() {

    var charSelcted = ' ';
    var numOfWrongAttemp = 0;
    var charUsed = [];
    var displayWord = [];

    var start = document.getElementById('start');
    start.addEventListener('click', startGame);


    // wordSet () is to set up the available words in the array

    function wordsSet() {

      words = ['authoritative', 'comprehensive', 'mischievous',
               'provisional', 'hypocritical', 'repository',
               'undertaker', 'extradition', 'presumptuous',
               'skyscraper', 'conclusive', 'breakthrough',
               'relinquish', 'transcribe', 'disruption',
               'underwrite', 'extinguish', 'commendable',
               'reciprocate', 'waterfront', 'typography',
               'responsive', 'standards', 'definitions',
               'orientations', 'automatically', 'determination',
               'establishing', 'calculate', 'established',
               'broadcast', 'mathematics', 'demonstrate',
               'researchers', 'deliberately', 'statement',
               'settlement', 'dispute', 'obstacle',
               'stainless', 'government', 'published',
               'apprehend', 'arrested', 'investigations',
               'immediately', 'jeopardise', 'authorities',
               'accidently', 'suffocate', 'concern',
               'overloaded', 'vulnerability', 'neglect',
               'improvement', 'performance', 'expected',
               'smartphone', 'capacity', 'electronics',
               'launching', 'surprise', 'responsible',
               'collection', 'collaboration', 'fashion',
               'business', 'forecast', 'analysts',
               'consumption', 'adventure', 'headlines',
               'alongside', 'diversity', 'collaboration',
               'understand', 'population', 'community',
               'childhood', 'provision', 'anniversary',
               'delinquency', 'celebrity', 'magazine',
               'superstar', 'popularly', 'production',
               'television', 'peacefully', 'appreciation',
               'composition', 'interview', 'director',
               'deserve', 'alternative', 'possibilities',
               'proposition', 'sustainable', 'memorial',
               'violence'];

    } // end of wordsSet

    // selectWord() is to select the word from the array pool.
    // It also format the word to be display on screen.

    function selectWord() {

      var searchWord = true;
      var result = [];
      var position = [];
      var count = 0;

      start.removeEventListener('click', startGame);

      reinstate();

      while (searchWord) {
        random = Math.random();
        if ( random < .993 ) {
          random *= 100;
          index = Math.round(random);
          searchWord = false;
        };
      };

      var word = document.getElementById('word');

      wordSelected = words[index];
      answer = wordSelected.split('');

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

      // displayWord = [];
      for ( i = 0; i < answer.length; i++ ) {
        displayWord[i] = '_';
      }  // fill '-' to array result

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

  }   // end of selectWord()

    wordsSet();

    // checkInput is to capture and check the alphabet the user clicked on.

    function checkInput() {

      var charSelected = ' ';

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

      compareStdAns();

      wonGame();

    } // end of check()

  // startGame()  - strt the game and update the screen.
  function startGame() {

    wrong = document.getElementById('wrong-attemp');
    wrong.innerHTML = ' ';
    letter = document.getElementById('letters-used');
    letter.innerHTML = ' ';

    charUsed = [];
    showWord = ' ';
    displayWord = [];
    // letterUsed = ' ';
    selectWord();
    numOfWrongAttemp = 0;

    var buttons = document.getElementById('buttons');
    buttons.addEventListener('click', checkInput);

  }   // end of startGame()

  // Compare user input with the word selected.
  function compareStdAns() {

    if ( answer.indexOf(charSelcted) === -1 ) {
      numOfWrongAttemp++;
      wrong = document.getElementById('wrong-attemp');
      wrong.innerHTML = numOfWrongAttemp;
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
;
    letter = document.getElementById('letters-used');
    letter.innerHTML = letterUsed;

  }  // end of compareStdAns()

  // check whether user has won the game.
  function wonGame() {

    if ( numOfWrongAttemp >= 6 ) {
      // word.innerHTML = 'You lost !!!';
      won = false;
      buttons.removeEventListener('click', checkInput);
      winLoss();
      restart();
    } else {
      if ( showWord === wordSelected) {
        // word.innerHTML = 'You won !!!';
        won = true;
        buttons.removeEventListener('click', checkInput);
        winLoss();
        restart();
      }
    }
  }  // end of wonGame()

  function restart() {

    start.addEventListener('click', startGame);

  }

  function winLoss() {

    charA = document.getElementById('A');
    charA.innerHTML = ' ';
    charB = document.getElementById('B');
    charB.innerHTML = ' ';
    charC = document.getElementById('C');
    charC.innerHTML = ' ';
    charD = document.getElementById('D');
    charD.innerHTML = ' ';
    charE = document.getElementById('E');
    charE.innerHTML = ' ';
    charF = document.getElementById('F');
    charF.innerHTML = 'Y';
    charG = document.getElementById('G');
    charG.innerHTML = 'o';
    charH = document.getElementById('H');
    charH.innerHTML = 'u';
    charI = document.getElementById('I');
    charI.innerHTML = ' ';
    charJ = document.getElementById('J');
    charJ.innerHTML = ' ';
    charK = document.getElementById('K');
    charK.innerHTML = ' ';
    charL = document.getElementById('L');
    charL.innerHTML = ' ';
    charM = document.getElementById('M');
    charM.innerHTML = ' ';
    charN = document.getElementById('N');
    charN.innerHTML = ' ';
    charO = document.getElementById('O');
    charO.innerHTML = ' ';
    charP = document.getElementById('P');
    charP.innerHTML = ' ';
    charQ = document.getElementById('Q');
    charQ.innerHTML = ' ';
    charR = document.getElementById('R');
    charR.innerHTML = ' ';
    charS = document.getElementById('S');
    charS.innerHTML = ' ';
    charT = document.getElementById('T');
    charT.innerHTML = ' ';
    charU = document.getElementById('U');
    charU.innerHTML = ' ';
    charV = document.getElementById('V');
    charV.innerHTML = ' ';
    charW = document.getElementById('W');
    charW.innerHTML = ' ';
    charX = document.getElementById('X');
    charX.innerHTML = ' ';
    charY = document.getElementById('Y');
    charY.innerHTML = ' ';
    charZ = document.getElementById('Z');
    charZ.innerHTML = ' ';
    if ( won ) {
      charS.innerHTML = 'w';
      charT.innerHTML = 'o';
      charU.innerHTML = 'n';
      charV.innerHTML = '\u263a'; // special character for happy
    } else {
      charR.innerHTML = 'l';
      charS.innerHTML = 'o';
      charT.innerHTML = 's';
      charU.innerHTML = 't';
      charV.innerHTML = '\u2639'; // special character for sad
    }

  }  // end of winLoss()

  function reinstate() {

    won = false;

    charA = document.getElementById('A');
    charA.innerHTML = 'A';
    charB = document.getElementById('B');
    charB.innerHTML = 'B';
    charC = document.getElementById('C');
    charC.innerHTML = 'C';
    charD = document.getElementById('D');
    charD.innerHTML = 'D';
    charE = document.getElementById('E');
    charE.innerHTML = 'E';
    charF = document.getElementById('F');
    charF.innerHTML = 'F';
    charG = document.getElementById('G');
    charG.innerHTML = 'G';
    charH = document.getElementById('H');
    charH.innerHTML = 'H';
    charI = document.getElementById('I');
    charI.innerHTML = 'I';
    charJ = document.getElementById('J');
    charJ.innerHTML = 'J';
    charK = document.getElementById('K');
    charK.innerHTML = 'K';
    charL = document.getElementById('L');
    charL.innerHTML = 'L';
    charM = document.getElementById('M');
    charM.innerHTML = 'M';
    charN = document.getElementById('N');
    charN.innerHTML = 'N';
    charO = document.getElementById('O');
    charO.innerHTML = 'O';
    charP = document.getElementById('P');
    charP.innerHTML = 'P';
    charQ = document.getElementById('Q');
    charQ.innerHTML = 'Q';
    charR = document.getElementById('R');
    charR.innerHTML = 'R';
    charS = document.getElementById('S');
    charS.innerHTML = 'S';
    charT = document.getElementById('T');
    charT.innerHTML = 'T';
    charU = document.getElementById('U');
    charU.innerHTML = 'U';
    charV = document.getElementById('V');
    charV.innerHTML = 'V';
    charW = document.getElementById('W');
    charW.innerHTML = 'W';
    charX = document.getElementById('X');
    charX.innerHTML = 'X';
    charY = document.getElementById('Y');
    charY.innerHTML = 'Y';
    charZ = document.getElementById('Z');
    charZ.innerHTML = 'Z';

  }

  } // end of window onload
