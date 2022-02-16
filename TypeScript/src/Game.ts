import { Board } from "./Board"
import { Player } from "./Tile"

export class Game {
  private lastPlayer: Player = Player.None
  private readonly board: Board = new Board()

  public Play (player: Player, x: number, y: number): void {
    this.checkThatMoveIsValid(player, x, y)
    this.makeMove(player, x, y)
  }

  public Winner (): string {
    if (this.board.AnyRowIsTakenBy(Player.X)) {
      return Player.X
    }

    if (this.board.AnyRowIsTakenBy(Player.O)) {
      return Player.O
    }

    return Player.None
  }

  private makeMove(player: Player, x: number, y: number) {
    this.lastPlayer = player
    this.board.AddTileAt(player, x, y)
  }

  private checkThatMoveIsValid(player: Player, x: number, y: number) {
    if (this.isFirstMove() && this.secondPlayerIsTryingToMove(player)) {
      throw new Error('Invalid first player')
    }

    if (this.playerIsRepeated(player)) {
      throw new Error('Invalid next player')
    }

    if (this.board.TileIsTaken(x, y)) {
      throw new Error('Invalid position')
    }
  }

  private playerIsRepeated(player: Player) {
    return player === this.lastPlayer
  }

  private secondPlayerIsTryingToMove(player: Player) {
    return player === Player.O
  }

  private isFirstMove() {
    return this.lastPlayer === Player.None
  }
}
