import { Board } from "./Board"
import { Player, Position } from "./Tile"

export class Game {
  private lastPlayer: Player = Player.None
  private readonly board: Board = new Board()

  public Play (player: Player, position: Position): void {
    this.checkThatMoveIsValid(player, position)
    this.makeMove(player, position)
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

  private checkThatMoveIsValid(player: Player, position: Position) {
    if (this.isFirstMove() && this.secondPlayerIsTryingToMove(player)) {
      throw new Error('Invalid first player')
    }

    if (this.playerIsRepeated(player)) {
      throw new Error('Invalid next player')
    }

    if (this.board.TileIsTaken(position)) {
      throw new Error('Invalid position')
    }
  }

  private makeMove(player: Player, position: Position) {
    this.lastPlayer = player
    this.board.AddTileAt(player, position)
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
