import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private coll = collection(this.firestore, 'games');

  constructor(private firestore: Firestore) { }

  createNewGame(game: Game) {
    return addDoc(this.coll, game.toJson());
  }

  getGames() {
    return collectionData(this.coll);
  }

  getGameById(id: string) {
    const gameDoc = doc(this.firestore, `games/${id}`);
    return docData(gameDoc) as any;
  }

  updateGame(gameId: string, gameData: any) {
    const gameDoc = doc(this.firestore, `games/${gameId}`);
    return updateDoc(gameDoc, gameData);
  }
}