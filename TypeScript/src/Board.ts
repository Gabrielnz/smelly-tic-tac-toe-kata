import { Player, Position } from "./Tile";

export class Board {
    private readonly _plays: Player[] = [];

    constructor() {
        this._plays = new Array(9).fill(Player.None);
    }

    public TileAt2(position: Position): Player {
        return this._plays[position];
    }

    public TileHasPlayer2(player: Player, position: Position): Boolean {
        return this.TileAt2(position) === player;
    }

    public AddTileAt2(player: Player, position: Position): void {
        this._plays[position] = player;
    }

    public AnyRowIsTakenBy2(player: Player): Boolean {
        const topRow = this._plays[Position.TopLeft] === player && this._plays[Position.TopMiddle] === player && this._plays[Position.TopRight] === player;
        const middleRow = this._plays[Position.MiddleLeft] === player && this._plays[Position.Middle] === player && this._plays[Position.MiddleRight] === player;
        const bottomRow = this._plays[Position.BottomLeft] === player && this._plays[Position.BottomMiddle] === player && this._plays[Position.BottomRight] === player;
        return topRow || middleRow || bottomRow;
    }

    public TileIsTaken2(position: Position): Boolean {
        return this.TileAt2(position) !== Player.None;
    }
}
