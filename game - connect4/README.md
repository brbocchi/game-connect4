# Connect4

Connect4 is a two-player game in which we need to connect 4 pieces of the same color (horizontally, vertically or diagonally) in order to win game.

## Installation instructions

All files must be in the same folder.
Some design won't load without a internet connection (fontawesome design).

## How to play

Each player alternately selects in which column want to add a piece, using button-clicks in the respective column.
When there are 4 connected pieces of the same color, this player wins the game. When nobody achieves it, there is a tie.
The keyboard can also be used to the play the game, in which each number corresponds to a column.

## Technologies and approach

First, the game was built using only a matrix, with basic Javascript and some CSS (start-game button), without user interface, using keyboard commands.
Second, a static user interface was devised using Canvas.
After, animated falling pieces were added using Javascript animation.
At last, click-buttons were added using CSS and Jquery.

## Unsolved problems

- The game doesn't have a responsive-design. It only suits notebooks and PC's.
- It doesn't point out which pieces were the winner ones, when the game ends.

