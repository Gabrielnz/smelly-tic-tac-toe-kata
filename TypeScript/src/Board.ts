import { Player, Position } from "./Tile";

export class Board {
    private readonly _newPlays: Player[] = [];

    constructor() {
        this._newPlays[Position.TopLeft] = Player.None;
        this._newPlays[Position.TopMiddle] = Player.None;
        this._newPlays[Position.TopRight] = Player.None;
        this._newPlays[Position.MiddleLeft] = Player.None;
        this._newPlays[Position.Middle] = Player.None;
        this._newPlays[Position.MiddleRight] = Player.None;
        this._newPlays[Position.BottomLeft] = Player.None;
        this._newPlays[Position.BottomMiddle] = Player.None;
        this._newPlays[Position.BottomRight] = Player.None;
    }

    public TileAt2(position: Position): Player {
        return this._newPlays[position];
    }

    public TileHasPlayer2(player: Player, position: Position): Boolean {
        return this.TileAt2(position) === player;
    }

    public AddTileAt2(player: Player, position: Position): void {
        this._newPlays[position] = player;
    }

    public AnyRowIsTakenBy2(player: Player): Boolean {
        const topRow = this._newPlays[Position.TopLeft] === player && this._newPlays[Position.TopMiddle] === player && this._newPlays[Position.TopRight] === player;
        const middleRow = this._newPlays[Position.MiddleLeft] === player && this._newPlays[Position.Middle] === player && this._newPlays[Position.MiddleRight] === player;
        const bottomRow = this._newPlays[Position.BottomLeft] === player && this._newPlays[Position.BottomMiddle] === player && this._newPlays[Position.BottomRight] === player;
        return topRow || middleRow || bottomRow;
    }

    public TileIsTaken2(position: Position): Boolean {
        return this.TileAt2(position) !== Player.None;
    }
}
