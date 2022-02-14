import { Player, Tile } from "./Tile";

export class Board {
    private readonly _plays: Tile[][];

    constructor() {
        this._plays = [
            [{ X: 0, Y: 0, player: Player.None }, { X: 1, Y: 0, player: Player.None }, { X: 2, Y: 0, player: Player.None }],
            [{ X: 0, Y: 1, player: Player.None }, { X: 1, Y: 1, player: Player.None }, { X: 2, Y: 1, player: Player.None }],
            [{ X: 0, Y: 2, player: Player.None }, { X: 1, Y: 2, player: Player.None }, { X: 2, Y: 2, player: Player.None }]
        ]
    }

    public TileAt(x: number, y: number): Tile {
        return this._plays[x][y];
    }

    public TileHasPlayer(player: Player, x: number, y: number): Boolean {
        return this.TileAt(x, y).player === player;
    }

    public AddTileAt(player: Player, x: number, y: number): void {
        this._plays[x][y].player = player;
    }

    public AnyRowIsTakenBy(player: Player): Boolean {
        return this._plays[0].every(tile => tile.player === player) ||
            this._plays[1].every(tile => tile.player === player) ||
            this._plays[2].every(tile => tile.player === player);
    }
}
