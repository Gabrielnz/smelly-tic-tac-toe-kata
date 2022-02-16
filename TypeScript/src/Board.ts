import { Player, Position, Tile } from "./Tile";

export class Board {
    // private readonly _plays: Tile[][];
    private readonly _newPlays: Player[] = [];

    constructor() {
        // this._plays = [
        //     [{ X: 0, Y: 0, player: Player.None }, { X: 1, Y: 0, player: Player.None }, { X: 2, Y: 0, player: Player.None }],
        //     [{ X: 0, Y: 1, player: Player.None }, { X: 1, Y: 1, player: Player.None }, { X: 2, Y: 1, player: Player.None }],
        //     [{ X: 0, Y: 2, player: Player.None }, { X: 1, Y: 2, player: Player.None }, { X: 2, Y: 2, player: Player.None }]
        // ]
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

    // public TileAt(x: number, y: number): Tile {
    //     return this._plays[x][y];
    // }

    // public TileHasPlayer(player: Player, x: number, y: number): Boolean {
    //     return this.TileAt(x, y).player === player;
    // }

    // public AddTileAt(player: Player, x: number, y: number): void {
    //     this._plays[x][y].player = player;
    // }

    // public AnyRowIsTakenBy(player: Player): Boolean {
    //     return this._plays.some(row => row.every(tile => tile.player === player));
    // }

    // public TileIsTaken(x: number, y: number): Boolean {
    //     return this.TileAt(x, y).player !== Player.None;
    // }

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
