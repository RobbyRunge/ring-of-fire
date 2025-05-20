export class Game {
  public players: string[] = [];
  public playerImages: string[] = [];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;
  public pickCardAnimation = false;
  public currentCard: string | undefined = '';

  constructor() {
    for (let i = 1; i <= 14; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }
    shuffle(this.stack)
  }

  public toJson() {
    return {
      players: this.players || [],
      playerImages: this.playerImages,
      stack: this.stack || [],
      playedCards: this.playedCards || [],
      currentPlayer: this.currentPlayer || 0,
      pickCardAnimation: this.pickCardAnimation,
      currentCard: this.currentCard
    };
  }
}

function shuffle(array: string[]) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}