var lig4;

function Lig4() {
  this.game = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  // console.log(this.game);
  this.rounds = 0;
  this.lastj = 0;
  this.player = 1;
  this.lasti = 0;
  this.finalPosition = 0;
};



Lig4.prototype.checkIfNumber = function (keyCode) {
  if (keyCode > 55 || keyCode < 49) {
    return false;
  } else {
    return true;
  }
};

Lig4.prototype.addFallingPiece = function (key) {
  this.lasti = key - 1;
  if (this.rounds % 2 == 0) {
    this.player = 1;
  }
  else {
    this.player = 2;
  }
  for (var j = this.game.length - 1; j >= 0; j--) {
    if (this.game[j][key - 1] == 0) {
      this.finalPosition = j;
      return;
    }
  }
}

Lig4.prototype.addPiece = function (key) {
  for (var j = this.game.length - 1; j >= 0; j--) {
    if (this.game[j][key - 1] == 0) {
      this.game[j][key - 1] = this.player;
      this.rounds++;
      // console.log(this.game);
      this.lastj = j;
      return;
    }
  }
};

Lig4.prototype.checkIfEmpty = function (key) {
  if (this.game[0][key - 1] != 0) {
    return false;
  }
  else {
    return true;
  }
}

Lig4.prototype.checkTie = function () {
  if (this.rounds >= 42) {
    return true
  } else {
    return false
  }
};

Lig4.prototype.checkWinner = function (key) {
  
  //column
  if (this.lastj <= this.game.length - 4) {
    if (this.game[this.lastj][key - 1] == this.game[this.lastj + 1][key - 1] && this.game[this.lastj][key - 1] == this.game[this.lastj + 2][key - 1] && this.game[this.lastj][key - 1] == this.game[this.lastj + 3][key - 1]) {
      console.log('true');
      return true;
    }
  }

  //line
  var lin = [];
  for (var i = 0; i <= 6; i++) {
    if (isNaN(this.game[this.lastj][key - 4 + i])) {
      lin[i] = -1;
    }
    else {
      lin[i] = this.game[this.lastj][key - 4 + i];
    }
  }
  for (var i = 0; i <= 3; i++) {
    if (lin[i] == lin[i + 1] && lin[i] == lin[i + 2] && lin[i] == lin[i + 3]) {
      console.log(lin);
      console.log('true');
      return true;
    }
  }

  // diagonal 1
  var elem = [];
  for (var i = 0; i <= 6; i++) {
    if (!Array.isArray(this.game[this.lastj - 3 + i]) || isNaN(this.game[this.lastj][key - 4 + i])) {
      elem[i] = -1;
    }
    else {
      elem[i] = this.game[this.lastj - 3 + i][key - 4 + i];
    }
  }
  for (var i = 0; i <= 3; i++) {
    if (elem[i] == elem[i + 1] && elem[i] == elem[i + 2] && elem[i] == elem[i + 3]) {
      console.log('true');
      return true;
    }
  }
  // diagonal 2
  var diag = [];
  for (var i = 0; i <= 6; i++) {
    if (!Array.isArray(this.game[this.lastj + 3 - i]) || isNaN(this.game[this.lastj][key - 4 + i])) {
      diag[i] = -1;
    }
    else {
      diag[i] = this.game[this.lastj + 3 - i][key - 4 + i];
    }
  }
  for (var i = 0; i <= 3; i++) {
    if (diag[i] == diag[i + 1] && diag[i] == diag[i + 2] && diag[i] == diag[i + 3]) {
      console.log('true');
      return true;
    }
  }
}

var endGame;
var drawAnimation;
var blockKeyboard;
var selectedButton;
$('#start-game-button').on('click', function () {
  var buttons = '<li><button class="btn btn-one"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-two"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-three"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-four"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-five"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-six"><i class="fas fa-caret-down fa-6x"></i></button></li>\
  <li><button class="btn btn-seven"><i class="fas fa-caret-down fa-6x"></i></button></li>'
  $('.control').html(buttons);
  
  
  $('.btn-one').on('click', function () {
    selectedButton = 1;
    beginGame();
  });
  $('.btn-two').click(function () {
    selectedButton = 2;
    beginGame();
  });
  
  $('.btn-three').click(function () {
    selectedButton = 3;
    beginGame();
  });
  
  $('.btn-four').click(function () {
    selectedButton = 4;
    beginGame();
  });
  
  $('.btn-five').click(function () {
    selectedButton = 5;
    beginGame();
  });
  
  $('.btn-six').click(function () {
    selectedButton = 6;
    beginGame();
  });
  
  $('.btn-seven').click(function () {
    selectedButton = 7;
    beginGame();
  });
  
  lig4 = new Lig4();
  lig4Canvas = new Lig4Canvas();
  lig4Canvas.clearCanvas();
  lig4Canvas.drawLines();
  lig4Canvas.writeTurn(lig4.player);
  endGame = false;
  blockKeyboard = false;
});


function beginGame() {
  if (endGame == false && blockKeyboard == false) {
    if (lig4.checkIfEmpty(selectedButton)) {
      lig4.addFallingPiece(selectedButton);

      drawAnimation = true;
      var updateCanvas = setInterval(function () {
        if (endGame == false && drawAnimation == true) {
          lig4Canvas.clearCanvas();
          lig4Canvas.drawLines();
          lig4Canvas.drawCurrentPieces(lig4.game);
          drawAnimation = lig4Canvas.drawFallingPiece();
        }
        else {
          clearInterval(updateCanvas);
        }
      }, 15);
      
      blockKeyboard = true;
      var timeoutId = setTimeout(function () {
        lig4.addPiece(selectedButton);
        if (lig4.checkWinner(selectedButton)) {
          lig4Canvas.winner(lig4.player);
          endGame = true;
        }
        if (lig4.checkTie()) {
          lig4Canvas.tie();
          endGame = true;
        }
        if (endGame == false) {
          lig4Canvas.writeTurn(lig4.player);
        }
        blockKeyboard = false;
        blockButtons = false;
      }, 700);
    }

  }
}




document.onkeydown = function (e) {
  if (endGame == false && blockKeyboard == false) {
    if (lig4.checkIfNumber(e.keyCode)) {
      if (lig4.checkIfEmpty(e.key)) {
        lig4.addFallingPiece(e.key);

        drawAnimation = true;
        var updateCanvas = setInterval(function () {
          if (endGame == false && drawAnimation == true) {
            lig4Canvas.clearCanvas();
            lig4Canvas.drawLines();
            lig4Canvas.drawCurrentPieces(lig4.game);
            drawAnimation = lig4Canvas.drawFallingPiece();
          }
          else {
            clearInterval(updateCanvas);
          }
        }, 15);

        blockKeyboard = true;
        var timeoutId = setTimeout(function () {
          lig4.addPiece(e.key);
          if (lig4.checkWinner(e.key)) {
            lig4Canvas.winner(lig4.player);
            endGame = true;
          }
          if (lig4.checkTie()) {
            lig4Canvas.tie();
            endGame = true;
          }
          if(endGame == false){
            lig4Canvas.writeTurn(lig4.player);
          }
          blockKeyboard = false;
        }, 700);
      }
    }
  }
}









