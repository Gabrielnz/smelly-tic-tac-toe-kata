import { Board } from "./Board"
import { Player } from "./Tile"

export class Game {
  private lastPlayer: Player = Player.None
  private readonly board: Board = new Board()

  public Play (player: Player, x: number, y: number): void {
    this.checkThatMoveIsValid(player, x, y)
    this.makeMove(player, x, y)
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

    if (this.tileIsAlreadyPlayed(x, y)) {
      throw new Error('Invalid position')
    }
  }

  private tileIsAlreadyPlayed(x: number, y: number) {
    return this.board.TileAt(x, y).player !== Player.None
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

  public Winner (): string {
    if (this.topRowIsTakenBy(Player.X)) {
      return Player.X
    }

    if (this.topRowIsTakenBy(Player.O)) {
      return Player.O
    }

    if (this.middleRowIsTakenBy(Player.X)) {
      return Player.X
    }

    if (this.middleRowIsTakenBy(Player.O)) {
      return Player.O
    }

    if (this.bottomRowIsTaken()) {
      // if middle row is full with same player
      if (this.board.TileAt(2, 0)!.player ===
                    this.board.TileAt(2, 1)!.player &&
                    this.board.TileAt(2, 2)!.player ===
                            this.board.TileAt(2, 1)!.player) {
        return this.board.TileAt(2, 0)!.player
      }
    }

    return Player.None
  }

  private topRowIsTakenBy(player: Player): Boolean {
    return this.board.TileHasPlayer(player, 0, 0) &&
      this.board.TileHasPlayer(player, 0, 1) &&
      this.board.TileHasPlayer(player, 0, 2)
  }

  private middleRowIsTakenBy(player: Player): Boolean {
    return this.board.TileHasPlayer(player, 1, 0) &&
      this.board.TileHasPlayer(player, 1, 1) &&
      this.board.TileHasPlayer(player, 1, 2)
  }

  private bottomRowIsTaken(): Boolean {
    return this.board.TileIsFilled(2, 0) &&
      this.board.TileIsFilled(2, 1) &&
      this.board.TileIsFilled(2, 2)
  }
}
