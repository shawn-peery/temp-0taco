import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  gameBoard = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x'],
  ];

  playerOne = 'x';
  playerTwo = 'o';

  playerTurn = 'x';

  placeMarker(event) {
    const idString = event.currentTarget.id;
    const rowId = idString.charAt(3);
    const squareId = idString.charAt(10);

    if (this.gameBoard[rowId][squareId] !== '') {
      alert('that spot is taken!');
      return;
    }

    if (this.playerTurn === 'x') {
      this.gameBoard[rowId][squareId] = 'x';
      this.playerTurn = 'o';
    } else {
      this.gameBoard[rowId][squareId] = 'o';
      this.playerTurn = 'x';
    }
  }

  startGame() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.gameBoard[i][j] = '';
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
