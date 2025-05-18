import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/services.component';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  constructor(private router: Router, private services: GameService) { }

  newGame() {
    let game = new Game()
    this
      .services
      .createNewGame(game)
      .then((gameInfo:any) => {       
        this.router.navigateByUrl('/game/' + gameInfo['id']);
      });
  }
}
