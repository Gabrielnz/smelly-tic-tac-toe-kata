import { Player } from './Player'
import { Position } from './Position'

export class Board {
  private readonly _plays: Player[] = new Array(9).fill(Player.None)

  public TileAt (position: Position): Player {
    return this._plays[position]
  }

  public TileHasPlayer (player: Player, position: Position): boolean {
    return this.TileAt(position) === player
  }

  public AddTileAt (player: Player, position: Position): void {
    this._plays[position] = player
  }

  public AnyRowIsTakenBy (player: Player): boolean {
    return this.isTopRowTakenBy(player) || this.isMiddleRowTakenBy(player) || this.isBottomRowTakenBy(player)
  }

  private isBottomRowTakenBy (player: Player): boolean {
    return this._plays[Position.BottomLeft] === player &&
            this._plays[Position.BottomMiddle] === player &&
            this._plays[Position.BottomRight] === player
  }

  private isMiddleRowTakenBy (player: Player): boolean {
    return this._plays[Position.MiddleLeft] === player &&
            this._plays[Position.Middle] === player &&
            this._plays[Position.MiddleRight] === player
  }

  private isTopRowTakenBy (player: Player): boolean {
    return this._plays[Position.TopLeft] === player &&
            this._plays[Position.TopMiddle] === player &&
            this._plays[Position.TopRight] === player
  }

  public TileIsTaken (position: Position): boolean {
    return this.TileAt(position) !== Player.None
  }
}
