import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";
import { collectionData, collection, Firestore, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {

  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game = new Game();

  firestore: Firestore = inject(Firestore);

  items$;

  constructor(public dialog: MatDialog) {
    this.items$ = collectionData(this.getGamesRef());
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  ngOnInit(): void {
    this.newGame();
    collectionData(collection(this.firestore, 'games'))
      .subscribe((game) => {
        console.log('Game updated', game);
      })
  }

  newGame() {
    this.game = new Game();
    addDoc(this.getGamesRef(), this.game.toJson());
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop();
      if (card) {
        this.currentCard = card;
        this.pickCardAnimation = true;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        setTimeout(() => {
          this.game.playedCards.push(card);
          this.pickCardAnimation = false;
        }, 1000);
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}
