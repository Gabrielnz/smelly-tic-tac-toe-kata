import { Board } from "./Board"

export class Game {
  private lastPlayer: string = ' '
  private readonly board: Board = new Board()

  public Play (player: string, x: number, y: number): void {
    this.checkThatMoveIsValid(player, x, y)
    this.makePlayerMove(player, x, y)
  }

  private makePlayerMove(player: string, x: number, y: number) {
    this.lastPlayer = player
    this.board.AddTileAt(player, x, y)
  }

  private checkThatMoveIsValid(playerToMove: string, x: number, y: number) {
    if (this.isFirstMove() && this.playerToMoveIsO(playerToMove)) {
      throw new Error('Invalid first player')
    }
    // if not first move but player repeated
    if (playerToMove === this.lastPlayer) {
      throw new Error('Invalid next player')
    }
    // if not first move but play on an already played tile
    if (this.board.TileAt(x, y).Symbol !== ' ') {
      throw new Error('Invalid position')
    }
  }

  private playerToMoveIsO(symbol: string) {
    return symbol === 'O'
  }

  private isFirstMove() {
    return this.lastPlayer === ' '
  }

  public Winner (): string {
    // if the positions in first row are taken
    if (this.board.TileAt(0, 0)!.Symbol !== ' ' &&
                this.board.TileAt(0, 1)!.Symbol !== ' ' &&
                this.board.TileAt(0, 2)!.Symbol !== ' ') {
      // if first row is full with same symbol
      if (this.board.TileAt(0, 0)!.Symbol ===
                    this.board.TileAt(0, 1)!.Symbol &&
                    this.board.TileAt(0, 2)!.Symbol === this.board.TileAt(0, 1)!.Symbol) {
        return this.board.TileAt(0, 0)!.Symbol
      }
    }

    // if the positions in first row are taken
    if (this.board.TileAt(1, 0)!.Symbol !== ' ' &&
                this.board.TileAt(1, 1)!.Symbol !== ' ' &&
                this.board.TileAt(1, 2)!.Symbol !== ' ') {
      // if middle row is full with same symbol
      if (this.board.TileAt(1, 0)!.Symbol ===
                    this.board.TileAt(1, 1)!.Symbol &&
                    this.board.TileAt(1, 2)!.Symbol ===
                            this.board.TileAt(1, 1)!.Symbol) {
        return this.board.TileAt(1, 0)!.Symbol
      }
    }

    // if the positions in first row are taken
    if (this.board.TileAt(2, 0)!.Symbol !== ' ' &&
                this.board.TileAt(2, 1)!.Symbol !== ' ' &&
                this.board.TileAt(2, 2)!.Symbol !== ' ') {
      // if middle row is full with same symbol
      if (this.board.TileAt(2, 0)!.Symbol ===
                    this.board.TileAt(2, 1)!.Symbol &&
                    this.board.TileAt(2, 2)!.Symbol ===
                            this.board.TileAt(2, 1)!.Symbol) {
        return this.board.TileAt(2, 0)!.Symbol
      }
    }

    return ' '
  }
}


