import { Board } from "./Board"
import { Player, Position } from "./Tile"

export class Game {
  private lastPlayer: Player = Player.None
  private readonly board: Board = new Board()
  private readonly coordinatesToPosition: Position[][] = [
    [Position.TopLeft, Position.TopMiddle, Position.TopRight],
    [Position.MiddleLeft, Position.Middle, Position.MiddleRight],
    [Position.BottomLeft, Position.BottomMiddle, Position.BottomRight]
  ]

  public Play (player: Player, x: number, y: number): void {
    this.checkThatMoveIsValid(player, this.coordinatesToPosition[x][y])
    this.makeMove(player, this.coordinatesToPosition[x][y])
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
