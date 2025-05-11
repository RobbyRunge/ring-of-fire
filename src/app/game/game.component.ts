import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {

  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game = new Game();

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop();
      if (card) { 
        this.currentCard = card;
        this.pickCardAnimation = true;
        setTimeout(() => {
          this.game.playedCards.push(card);
          this.pickCardAnimation = false;
        }, 1000);
      }
    }
  }
}
