namespace SpriteKind {
    export const Zombie = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Arrow = SpriteKind.create()
    export const Spider = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Boss_1_Hit = SpriteKind.create()
    export const Boss_2_Hit = SpriteKind.create()
    export const Boss_3_Hit = SpriteKind.create()
    export const Boss_4_Hit = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.purpleOuterEast0, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Spider, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeScoreBy(2)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Boss_1_Hit, function (sprite, otherSprite) {
    sprite.destroy()
    Boss.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Boss.setKind(SpriteKind.Boss_2_Hit)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Bomb2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Player_1, 75, 0)
    Bomb2.setKind(SpriteKind.Bomb)
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Boss_2_Hit, function (sprite, otherSprite) {
    sprite.destroy()
    Boss.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Boss.setKind(SpriteKind.Boss_3_Hit)
})
function Level_1 () {
    if (Level == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000080011111111191f1d1f1b1b1d1f201b1d1d17181a1a10221b1b1d201b1b1d20201f16151a1a101f22221b1f1b1d1f1f1f1f27231a1a101b1d201f1f1b1d1c1f1b1d27231a1a101c1d1d1e1d1b1c201b201c17181a1a1022201b1d1b1b201c201f1f16151a1a101d1d1b1d1f1b1f1b1b1f1d1313132814221b1b1d1f1d1d1d1d1f1b`,
            img`
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,sprites.dungeon.floorMixed,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.purpleOuterSouth0],
            TileScale.Sixteen
        ))
        Player_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f . . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. f f f f f f f . . . . . . . . 
. . f f d f d . . . . . . . . . 
. . d d d d d . . . . . . . . . 
. . . d d d f . . . . . . . . . 
. . . 7 7 7 . . . . . . . . . . 
. . . 7 7 7 f f . . . . . . . . 
. . . d 7 7 f . f . . . . . . . 
. . . d d d f . . f . . . . . . 
. . . 8 8 8 f . f . . . . . . . 
. . . 8 8 8 f f . . . . . . . . 
. . . 8 8 8 . . . . . . . . . . 
`, SpriteKind.Player)
        Player_1.setPosition(10, Math.randomRange(45, 75))
        controller.moveSprite(Player_1, 75, 75)
        scene.cameraFollowSprite(Player_1)
    }
}
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Spider, function (sprite, otherSprite) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Zombie, sprites.dungeon.purpleOuterEast0, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Boss, function (sprite, otherSprite) {
    sprite.destroy()
    Boss.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . 6 6 6 6 . . . . . 
. . . . . . f 3 8 8 3 f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f 6 6 . . . 
. . . . . . . f f f 6 8 8 . . . 
. . . . . . . . f f f f 8 f . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . 8 . . 6 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Boss.setKind(SpriteKind.Boss_1_Hit)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Arrow2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . . . f . . . . . . . . . 
. . . 1 f f f f . . . . . . . . 
. . 1 . . . f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Player_1, 75, 0)
    Arrow2.setKind(SpriteKind.Arrow)
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Zombie, function (sprite, otherSprite) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Spider, sprites.dungeon.purpleOuterEast0, function (sprite, location) {
    sprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Arrow, SpriteKind.Zombie, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Boss_4_Hit, function (sprite, otherSprite) {
    sprite.destroy()
    Boss.destroy(effects.confetti, 1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Boss_3_Hit, function (sprite, otherSprite) {
    sprite.destroy()
    Boss.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f f 6 . . . . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . 8 . . 6 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Boss.setKind(SpriteKind.Boss_4_Hit)
})
let spider: Sprite = null
let Zombie2: Sprite = null
let Arrow2: Sprite = null
let Player_1: Sprite = null
let Bomb2: Sprite = null
let Boss: Sprite = null
let Level = 0
Level = 1
info.setLife(50)
info.setScore(0)
Level_1()
game.onUpdateInterval(2000, function () {
    Zombie2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 . . . . 
. . . . . . . 8 8 8 8 8 8 . . . 
. . . . . . . 9 8 8 9 8 8 . . . 
. . . . . . . 8 8 8 8 8 8 . . . 
. . . . . . . 8 8 8 8 8 8 . . . 
. . . . . . . . 6 8 8 8 . . . . 
. . . . . . . . 8 8 8 8 8 . . . 
. . . . . . . . . 8 8 8 8 . . . 
. . . . . . . . . . . . 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Zombie)
    Zombie2.setPosition(160, Math.randomRange(15, 105))
    Zombie2.setVelocity(-20, 0)
})
game.onUpdateInterval(10000, function () {
    if (game.runtime() >= 60000) {
        Boss = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . 
. . . . . . f 6 6 6 6 f . . . . 
. . . . . . f 3 8 8 3 f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f 6 6 . . . 
. . . . . . . f f f 6 8 8 . . . 
. . . . f f f 8 f f f f 8 f . . 
. . . . 1 1 . . f f f f . . . . 
. . . . 1 1 1 . 8 . . 6 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Boss)
        Boss.setVelocity(-15, 0)
        Boss.setPosition(160, Math.randomRange(15, 105))
    }
})
game.onUpdateInterval(5000, function () {
    spider = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . f f f f . . . . 
. . . . . . . f f f f f f . . . 
. . . . . . f f f f f f f f . . 
. . . f f f f f f f f f f f . . 
. . . 2 f 2 f f f f f f f . . . 
. . f f f f f f . f f . . f . . 
. f . f . f . f . f . f . . f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Spider)
    spider.setPosition(160, Math.randomRange(15, 105))
    spider.setVelocity(-30, 0)
})
forever(function () {
    music.setVolume(50)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", 400)
        music.playMelody("C5 - C5 - C - C - ", 400)
    }
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 C E C5 C E C D ", 400)
        music.playMelody("C5 C5 E E F F E D ", 400)
    }
})
