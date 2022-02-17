import { Player, Position } from "./Tile";

export class Board {
    private readonly _plays: Player[] = new Array(9).fill(Player.None);

    public TileAt(position: Position): Player {
        return this._plays[position];
    }

    public TileHasPlayer(player: Player, position: Position): Boolean {
        return this.TileAt(position) === player;
    }

    public AddTileAt(player: Player, position: Position): void {
        this._plays[position] = player;
    }

    public AnyRowIsTakenBy(player: Player): Boolean {
        return this.isTopRowTakenBy(player) || this.isMiddleRowTakenBy(player) || this.isBottomRowTakenBy(player);
    }

    private isBottomRowTakenBy(player: Player) {
        return this._plays[Position.BottomLeft] === player
            && this._plays[Position.BottomMiddle] === player
            && this._plays[Position.BottomRight] === player;
    }

    private isMiddleRowTakenBy(player: Player) {
        return this._plays[Position.MiddleLeft] === player
            && this._plays[Position.Middle] === player
            && this._plays[Position.MiddleRight] === player;
    }

    private isTopRowTakenBy(player: Player) {
        return this._plays[Position.TopLeft] === player
            && this._plays[Position.TopMiddle] === player
            && this._plays[Position.TopRight] === player;
    }

    public TileIsTaken(position: Position): Boolean {
        return this.TileAt(position) !== Player.None;
    }
}
