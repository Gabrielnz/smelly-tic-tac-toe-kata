
import { Game } from './Game'
import { Player, Position } from './Tile'

describe('TicTacToe game', () => {
  let game: Game

  beforeEach(() => {
    game = new Game()
  })

  it('should not allow player O to play first', () => {
    expect(() => game.Play2(Player.O, Position.TopLeft)).toThrow()
  })

  it('should not allow player x to play twice in a row', () => {
    game.Play(Player.X, 0, 0)
    expect(() => game.Play2(Player.X, Position.MiddleLeft)).toThrow()
  })

  it('should not allow a player to play in last played position', () => {
    game.Play(Player.X, 0, 0)
    expect(() => game.Play(Player.O, 0, 0)).toThrow()
  })

  it('should not allow a player to play in any played position', () => {
    game.Play(Player.X, 0, 0)
    game.Play(Player.O, 1, 0)
    expect(() => game.Play(Player.X, 0, 0)).toThrow()
  })

  it('should declare player X as winner if it plays three in top row', () => {
    game.Play(Player.X, 0, 0)
    game.Play(Player.O, 1, 0)
    game.Play(Player.X, 0, 1)
    game.Play(Player.O, 1, 1)
    game.Play(Player.X, 0, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in top row', () => {
    game.Play(Player.X, 1, 0)
    game.Play(Player.O, 0, 0)
    game.Play(Player.X, 1, 1)
    game.Play(Player.O, 0, 1)
    game.Play(Player.X, 2, 2)
    game.Play(Player.O, 0, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should declare player X as winner if it plays three in middle row', () => {
    game.Play(Player.X, 1, 0)
    game.Play(Player.O, 0, 0)
    game.Play(Player.X, 1, 1)
    game.Play(Player.O, 0, 1)
    game.Play(Player.X, 1, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in middle row', () => {
    game.Play(Player.X, 0, 0)
    game.Play(Player.O, 1, 0)
    game.Play(Player.X, 2, 1)
    game.Play(Player.O, 1, 1)
    game.Play(Player.X, 2, 2)
    game.Play(Player.O, 1, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should declare player X as winner if it plays three in bottom row', () => {
    game.Play(Player.X, 2, 0)
    game.Play(Player.O, 0, 0)
    game.Play(Player.X, 2, 1)
    game.Play(Player.O, 0, 1)
    game.Play(Player.X, 2, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in bottom row', () => {
    game.Play(Player.X, 0, 0)
    game.Play(Player.O, 2, 0)
    game.Play(Player.X, 1, 1)
    game.Play(Player.O, 2, 1)
    game.Play(Player.X, 0, 1)
    game.Play(Player.O, 2, 2)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should not declare any player as a winner when there are moves left to be made', () => {
    game.Play(Player.X, 0, 0)
    game.Play(Player.O, 2, 0)
    game.Play(Player.X, 1, 1)
    game.Play(Player.O, 2, 1)

    const winner = game.Winner()

    expect(winner).toBe(Player.None)
  })
})
