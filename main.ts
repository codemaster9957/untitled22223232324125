namespace SpriteKind {
    export const now = SpriteKind.create()
    export const later = SpriteKind.create()
    export const meteor = SpriteKind.create()
}
namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
    export const shield = StatusBarKind.create()
}
controller.combos.attachCombo("A+L", function () {
    info.setScore(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `,img`
        ........................
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ..........bccc66cc33333c
        ..........b55c6c55c3333c
        ..........ff5c6c5ff333cc
        ..........ff5ccc5ff666cc
        ...........b55355c33333c
        ..........cc55555bcc333c
        .........c5cccccccc5c3c.
        .........c5555c55555cb..
        .........c555c4c5554c5b.
        .........c455c4c555c45c.
        ..........ccc444ccccccc.
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ............ccccccc333c.
        ...........c555c555c333c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........c55c5c55c55c6cc
        .........ff5ccc5ffc4c33c
        .........ff5ccc5ffc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ....................cc..
        ............cccccccc63c.
        ...........c555c555c36cc
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........ff5ccc5ff55c6cc
        .........ff5ccc5ffc4c33c
        .........c55ccc55cc5c33c
        .........c55ccc55cc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ........................
        ........................
        ........................
        .................cc.....
        .............cccc63c....
        ...........cc633336cc...
        ..........c6666333333c..
        ..........c6666633333c..
        .......cc.cccc666333cc..
        ......c55ccc55c66666cc..
        ......ff5ccc5ff663333c..
        ......ff5ccc5ff633333c..
        ..bbbbbbbb5555c333333c..
        .c55c555554ccccc3c45c...
        c55c55555545554cccc5c...
        ccccccccccccccccc.ccc...
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ............c6666333333c
        .........bccc66cc633333c
        .........b55c6c55c6333cc
        .........ff5c6c5ff6666cc
        .........ff53cc5ff33333c
        ..........b553555c33333c
        ..........c45554c33333c.
        .......bbbbbb44bccccbb..
        ......c5b555bbc55ccc45b.
        ......c5c5555455ccccc5c.
        .....c5c5555545cc...c5c.
        .....ccccccccccc....ccc.
        `],
    500,
    false
    )
    info.startCountdown(2)
})
statusbars.onZero(StatusBarKind.health2, function (status) {
    game.over(true)
})
controller.combos.attachCombo("B+L", function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c . . 
        . . . . . . . c c c c c 6 3 c . 
        . . . . . . c 6 6 3 3 3 6 6 c . 
        . . . . . c 6 6 6 3 3 3 3 3 3 c 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . . c c c 6 6 6 6 6 3 3 3 3 3 c 
        . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
        c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
        c 6 c c c c 3 c 6 6 6 6 6 6 c c 
        c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
        . c 6 c c c c 6 c 6 3 3 3 3 6 c 
        . . c 6 c c c c c 6 3 3 3 6 c . 
        . . . c c c c c c c c c c c . . 
        `)
    statusbar3.value += 10
})
sprites.onOverlap(SpriteKind.meteor, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -4
})
controller.combos.attachCombo("B+R", function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . . . . . . . 
        . c 3 6 c c c c c . . . . . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `)
    statusbar3.value += 10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . c c c c 6 3 c . . . 
        . . . . . c 6 6 3 3 3 6 c . . . 
        . . . . c 6 6 3 3 3 3 3 3 c . . 
        b c c c 6 6 c c 3 3 3 3 3 3 c . 
        b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
        f f 5 c 6 c 5 f f 6 3 3 3 c c . 
        f f 5 c c c 5 f f 6 6 6 6 c c . 
        . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
        . c 5 5 5 5 4 c c c 3 3 3 3 c . 
        . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
        . c 5 b 4 4 b b 5 c b b c . . . 
        . c c 5 4 c 5 5 5 c c 5 c . . . 
        . . . c c 5 5 5 5 c c c c . . . 
        . . . . c c c c c c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
        c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
        b 5 4 b 4 4 4 c 5 5 5 b c c . . 
        c 4 5 5 b 4 4 c 5 5 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
        c 5 5 5 5 c 4 c c c c c c 5 c . 
        . c c c c c c . . . . . c c c . 
        `],
    500,
    false
    )
    statusbar3.value = 0
})
info.onCountdownEnd(function () {
    info.player2.setScore(0)
    info.setScore(0)
})
controller.combos.attachCombo("A+R", function () {
    info.setScore(2)
    animation.runImageAnimation(
    mySprite,
    [img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333cc6c.cc..........
        c33333c55c6c55b.........
        c33333ff5c6c5ff.........
        cc3336ff5c6c5ff.........
        cc6666c553c355b.........
        c333333c55355b..........
        c3333ccb55555cc.........
        .c33c55b4555455c........
        ..bbc5bb4444b45b........
        .b54c4555b4b554c........
        .c5c4c555c4c555c........
        .c5c4c5555c5555c........
        .ccc..ccccccccc.........
        `,img`
        ........................
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c33333cc66cccb..........
        c3333c55c6c55b..........
        cc333ff5c6c5ff..........
        cc666ff5ccc5ff..........
        c33333c55355b...........
        c333ccb55555cc..........
        .c3c5cccccccc5c.........
        ..bc55555c5555c.........
        .b5c4555c4c555c.........
        .c54c555c4c554c.........
        .ccccccc444ccc..........
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c333ccccccc............
        c333c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55c55c5c55c.........
        c33c4cff5ccc5ff.........
        c33c5cff5ccc5ff.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ........................
        ........................
        ........................
        .....cc.................
        ....c36cccc.............
        ...cc633336cc...........
        ..c3333336666c..........
        ..c3333366666c..........
        ..cc333666cccc.cc.......
        ..cc66666c55ccc55c......
        ..c333366ff5ccc5ff......
        ..c333336ff5ccc5ff......
        ..c333333c5555bbbbbbbb..
        ...c54c3ccccc455555c55c.
        ...c5cccc45554555555c55c
        ...ccc.ccccccccccccccccc
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `],
    500,
    false
    )
    info.startCountdown(2)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (mysprite2.isHittingTile(CollisionDirection.Left)) {
        mysprite2.setVelocity(50, 0)
    }
    if (mysprite2.isHittingTile(CollisionDirection.Right)) {
        mysprite2.setVelocity(-50, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    500,
    false
    )
    statusbar3.value = 0
})
controller.combos.attachCombo("L+R+A", function () {
    if (statusbar.value <= 10) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . c c c a c . . . . 
            . . c c b b b a c a a a c . . . 
            . c c a b a c b a a a b c c . . 
            . c a b c f f f b a b b b a . . 
            . c a c f f f 8 a b b b b b a . 
            . c a 8 f f 8 c a b b b b b a . 
            c c c a c c c c a b c f a b c c 
            c c a a a c c c a c f f c b b a 
            c c a b 6 a c c a f f c c b b a 
            c a b c 8 6 c c a a a b b c b c 
            c a c f f a c c a f a c c c b . 
            c a 8 f c c b a f f c b c c c . 
            . c b c c c c b f c a b b a c . 
            . . a b b b b b b b b b b b c . 
            . . . c c c c b b b b b c c . . 
            . . . . . . . . c b b c . . . . 
            `, mySprite, 100, 0)
        projectile.setKind(SpriteKind.meteor)
        statusbar4.value += -10
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (statusbar3.value == 10) {
        music.spooky.playUntilDone()
        info.startCountdown(1)
    }
    if (info.player2.score() <= 1) {
        statusbar.value += -1
        info.startCountdown(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.later, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.score() == 2) {
        statusbar2.value += -10
        info.setScore(0)
    }
    if (info.score() == 1) {
        statusbar2.value += -10
        info.setScore(0)
    }
})
let projectile: Sprite = null
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mysprite2: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, SpriteKind.Player)
mysprite2 = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Enemy)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.health2)
statusbar3 = statusbars.create(20, 4, StatusBarKind.shield)
statusbar4 = statusbars.create(20, 4, StatusBarKind.Magic)
statusbar4.attachToSprite(mySprite, 8, 0)
statusbar4.value = 0
statusbar3.value = 10
statusbar3.setColor(9, 1)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mysprite2)
statusbar3.max = 10
statusbar3.attachToSprite(mySprite, 4, 0)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
tiles.placeOnTile(mysprite2, tiles.getTileLocation(18, 8))
game.onUpdateInterval(5000, function () {
    mysprite2.setVelocity(50, 0)
})
game.onUpdateInterval(5000, function () {
    info.player2.changeScoreBy(1)
})
game.onUpdateInterval(10000, function () {
    statusbar4.value += 1
})
