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
    if (this.isFirstMove() && this.playerToMoveIsO(player)) {
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

  private playerToMoveIsO(symbol: Player) {
    return symbol === Player.O
  }

  private isFirstMove() {
    return this.lastPlayer === Player.None
  }

  public Winner (): string {
    // if the positions in first row are taken
    if (this.board.TileAt(0, 0)!.player !== Player.None &&
                this.board.TileAt(0, 1)!.player !== Player.None &&
                this.board.TileAt(0, 2)!.player !== Player.None) {
      // if first row is full with same symbol
      if (this.board.TileAt(0, 0)!.player ===
                    this.board.TileAt(0, 1)!.player &&
                    this.board.TileAt(0, 2)!.player === this.board.TileAt(0, 1)!.player) {
        return this.board.TileAt(0, 0)!.player
      }
    }

    // if the positions in first row are taken
    if (this.board.TileAt(1, 0)!.player !== Player.None &&
                this.board.TileAt(1, 1)!.player !== Player.None &&
                this.board.TileAt(1, 2)!.player !== Player.None) {
      // if middle row is full with same symbol
      if (this.board.TileAt(1, 0)!.player ===
                    this.board.TileAt(1, 1)!.player &&
                    this.board.TileAt(1, 2)!.player ===
                            this.board.TileAt(1, 1)!.player) {
        return this.board.TileAt(1, 0)!.player
      }
    }

    // if the positions in first row are taken
    if (this.board.TileAt(2, 0)!.player !== Player.None &&
                this.board.TileAt(2, 1)!.player !== Player.None &&
                this.board.TileAt(2, 2)!.player !== Player.None) {
      // if middle row is full with same symbol
      if (this.board.TileAt(2, 0)!.player ===
                    this.board.TileAt(2, 1)!.player &&
                    this.board.TileAt(2, 2)!.player ===
                            this.board.TileAt(2, 1)!.player) {
        return this.board.TileAt(2, 0)!.player
      }
    }

    return ' '
  }
}


