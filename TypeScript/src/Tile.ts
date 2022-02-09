
export interface Tile {
    X: number;
    Y: number;
    player: Player;
}

export enum Player {
    X = 'X',
    O = 'O',
    None = ' '
}