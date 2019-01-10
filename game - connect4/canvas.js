
function Lig4Canvas() {
  this.ctx = document.getElementById('lig4').getContext('2d');
  this.y = 0;
}

Lig4Canvas.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, 1200, 700);
};

Lig4Canvas.prototype.drawLines = function () {
  // vertical
  for (var i = 0; i < 8; i++) {
    var a = 320 + 80 * i;
    this.ctx.beginPath();
    this.ctx.moveTo(a, 0);
    this.ctx.lineTo(a, 480);
    this.ctx.stroke();
  };

  //horizontal
  for (var i = 0; i < 7; i++) {
    var a = 0 + 80 * i;
    this.ctx.beginPath();
    this.ctx.moveTo(320, a);
    this.ctx.lineTo(880, a);
    this.ctx.stroke();
  }
};

Lig4Canvas.prototype.drawFallingPiece = function () {
  if (this.y < 80 * lig4.finalPosition) {
    this.y += 10;
    this.ctx.beginPath();
    this.ctx.arc(360 + 80 * lig4.lasti, 40 + this.y, 30, 0, Math.PI * 2);
    if (lig4.player == 1) {
      this.ctx.fillStyle = "red";
    }
    else {
      this.ctx.fillStyle = "blue";
    }
    this.ctx.fill();
    return true;
  }
  else {
    this.ctx.beginPath();
    this.ctx.arc(360 + 80 * lig4.lasti, 40 + this.y, 30, 0, Math.PI * 2);
    if (lig4.player == 1) {
      this.ctx.fillStyle = "red";
    }
    else {
      this.ctx.fillStyle = "blue";
    }
    this.ctx.fill();
    this.y = 0;
    return false;
  }
}

Lig4Canvas.prototype.drawCurrentPieces = function (matrix) {
  for (var j = 0; j <= 5; j++) {
    for (var i = 0; i <= 6; i++) {
      if (matrix[j][i] == 1) {
        this.ctx.beginPath();
        this.ctx.arc(360 + 80 * i, 40 + 80 * j, 30, 0, Math.PI * 2);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
      }
      if (matrix[j][i] == 2) {
        this.ctx.beginPath();
        this.ctx.arc(360 + 80 * i, 40 + 80 * j, 30, 0, Math.PI * 2);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
      }
    }
  }
}

Lig4Canvas.prototype.writeTurn = function (player) {
  if (player == 2 || lig4.rounds == 0) {
    this.ctx.font = '36px sans-serif';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText("Player 1's turn", 50, 240);
  }
  else {
    this.ctx.font = '36px sans-serif';
    this.ctx.fillStyle = 'blue';
    this.ctx.fillText("Player 2's turn", 50, 240);
  }
}

Lig4Canvas.prototype.tie = function () {
  this.ctx.font = '36px sans-serif';
  this.ctx.fillText("It's a tie", 50, 240);
}

Lig4Canvas.prototype.winner = function (player) {
  this.ctx.font = '36px sans-serif';
  this.ctx.fillText('Player ' + player + ' wins!!!', 50, 240);
}

