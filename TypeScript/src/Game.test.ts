
import { Game } from './Game'
import { Player } from "./Player"
import { Position } from "./Position"

describe('TicTacToe game', () => {
  let game: Game

  beforeEach(() => {
    game = new Game()
  })

  it('should not allow player O to play first', () => {
    expect(() => game.Play(Player.O, Position.TopLeft)).toThrow()
  })

  it('should not allow player x to play twice in a row', () => {
    game.Play(Player.X, Position.TopLeft)
    expect(() => game.Play(Player.X, Position.MiddleLeft)).toThrow()
  })

  it('should not allow a player to play in last played position', () => {
    game.Play(Player.X, Position.TopLeft)
    expect(() => game.Play(Player.O, Position.TopLeft)).toThrow()
  })

  it('should not allow a player to play in any played position', () => {
    game.Play(Player.X, Position.TopLeft)
    game.Play(Player.O, Position.MiddleLeft)
    expect(() => game.Play(Player.X, Position.TopLeft)).toThrow()
  })

  it('should declare player X as winner if it plays three in top row', () => {
    game.Play(Player.X, Position.TopLeft)
    game.Play(Player.O, Position.MiddleLeft)
    game.Play(Player.X, Position.TopMiddle)
    game.Play(Player.O, Position.Middle)
    game.Play(Player.X, Position.TopRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in top row', () => {
    game.Play(Player.X, Position.MiddleLeft)
    game.Play(Player.O, Position.TopLeft)
    game.Play(Player.X, Position.Middle)
    game.Play(Player.O, Position.TopMiddle)
    game.Play(Player.X, Position.BottomRight)
    game.Play(Player.O, Position.TopRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should declare player X as winner if it plays three in middle row', () => {
    game.Play(Player.X, Position.MiddleLeft)
    game.Play(Player.O, Position.TopLeft)
    game.Play(Player.X, Position.Middle)
    game.Play(Player.O, Position.TopMiddle)
    game.Play(Player.X, Position.MiddleRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in middle row', () => {
    game.Play(Player.X, Position.TopLeft)
    game.Play(Player.O, Position.MiddleLeft)
    game.Play(Player.X, Position.BottomMiddle)
    game.Play(Player.O, Position.Middle)
    game.Play(Player.X, Position.BottomRight)
    game.Play(Player.O, Position.MiddleRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should declare player X as winner if it plays three in bottom row', () => {
    game.Play(Player.X, Position.BottomLeft)
    game.Play(Player.O, Position.TopLeft)
    game.Play(Player.X, Position.BottomMiddle)
    game.Play(Player.O, Position.TopMiddle)
    game.Play(Player.X, Position.BottomRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.X)
  })

  it('should declare player O as winner if it plays three in bottom row', () => {
    game.Play(Player.X, Position.TopLeft)
    game.Play(Player.O, Position.BottomLeft)
    game.Play(Player.X, Position.Middle)
    game.Play(Player.O, Position.BottomMiddle)
    game.Play(Player.X, Position.TopMiddle)
    game.Play(Player.O, Position.BottomRight)

    const winner = game.Winner()

    expect(winner).toBe(Player.O)
  })

  it('should not declare any player as a winner when there are moves left to be made', () => {
    game.Play(Player.X, Position.TopLeft)
    game.Play(Player.O, Position.BottomLeft)
    game.Play(Player.X, Position.Middle)
    game.Play(Player.O, Position.BottomMiddle)

    const winner = game.Winner()

    expect(winner).toBe(Player.None)
  })
})
