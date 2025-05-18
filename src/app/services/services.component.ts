import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private coll = collection(this.firestore, 'games');

  constructor(private firestore: Firestore) {}

  createNewGame(game: Game) {
    return addDoc(this.coll, game.toJson());
  }

  getGames() {
    return collectionData(this.coll);
  }
}