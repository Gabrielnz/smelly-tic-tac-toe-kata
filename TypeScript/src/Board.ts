import { Player, Tile } from "./Tile";

export class Board {
    private readonly _plays: Tile[] = [];

    constructor() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tile: Tile = { X: i, Y: j, player: Player.None };
                this._plays.push(tile);
            }
        }
    }

    public TileAt(x: number, y: number): Tile {
        return this._plays.find((t: Tile) => t.X === x && t.Y === y)!;
    }

    public TileHasPlayer(player: Player, x: number, y: number): Boolean {
        return this.TileAt(x, y).player === player;
    }

    public AddTileAt(player: Player, x: number, y: number): void {
        this._plays.find((t: Tile) => t.X === x && t.Y === y)!.player = player;
    }
}
