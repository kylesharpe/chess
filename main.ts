function Wbishop () {
    Wbishopc1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . e 1 e . . . . . . . 
        . . . . . e 1 a 1 e . . . . . . 
        . . . . e 1 a a a 1 e . . . . . 
        . . . . e 1 1 a 1 1 e . . . . . 
        . . . . . e 1 1 1 e . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . e e e . . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wbishopc1.setPosition(58, 114)
    Wbishopf1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . e 1 e . . . . . . . 
        . . . . . e 1 a 1 e . . . . . . 
        . . . . e 1 a a a 1 e . . . . . 
        . . . . e 1 1 a 1 1 e . . . . . 
        . . . . . e 1 1 1 e . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . e e e . . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wbishopf1.setPosition(103, 114)
}
function Wrook () {
    Wrooka1 = sprites.create(img`
        . e e e . e e e e e e . e e e . 
        . e 1 e e e e e e e e e e 1 e . 
        . e e e e e e e e e e e e e e . 
        . e e e 1 1 1 1 1 1 1 1 e e e . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . e e e e e e e e e e e e e e . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wrooka1.setPosition(28, 114)
    Wrookh1 = sprites.create(img`
        . e e e . e e e e e e . e e e . 
        . e 1 e e e e e e e e e e 1 e . 
        . e e e e e e e e e e e e e e . 
        . e e e 1 1 1 1 1 1 1 1 e e e . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . e e e e e e e e e e e e e e . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wrookh1.setPosition(132, 114)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(Wpawna2)) {
        controller.moveSprite(Wpawna2, 30, 30)
    } else {
        Wpawna2.setVelocity(0, 0)
    }
})
function Wknight () {
    Wknightb1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e 1 1 1 1 e e . . . . . . . 
        . e 1 a 1 1 1 1 e e . . . . . . 
        e 1 1 1 1 1 1 1 1 e e . . . . . 
        e 1 1 1 1 e e 1 1 1 e e . . . . 
        e 1 1 1 e . e 1 1 1 1 e e . . . 
        . e e e . . e 1 1 1 1 1 e e . . 
        . . . . . e 1 1 1 1 1 1 1 e . . 
        . . . e e 1 1 1 1 1 1 1 e e . . 
        . . . e 1 1 1 1 1 1 1 e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wknightb1.setPosition(43, 112)
    Wknightg1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e 1 1 1 1 e e . . . . . . . 
        . e 1 a 1 1 1 1 e e . . . . . . 
        e 1 1 1 1 1 1 1 1 e e . . . . . 
        e 1 1 1 1 e e 1 1 1 e e . . . . 
        e 1 1 1 e . e 1 1 1 1 e e . . . 
        . e e e . . e 1 1 1 1 1 e e . . 
        . . . . . e 1 1 1 1 1 1 1 e . . 
        . . . e e 1 1 1 1 1 1 1 e e . . 
        . . . e 1 1 1 1 1 1 1 e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wknightg1.setPosition(118, 112)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.destroy()
    Wpawna2.destroy()
    mySprite.x = 0
})
function Cursor () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 30, 30)
}
function Wqueen () {
    Wqueend1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . e . . . . . e . . . . . e . . 
        . e e . . . e 1 e . . . e e . . 
        . e 1 e . e 1 1 1 e . e 1 e . . 
        . e 1 1 e 1 1 1 1 1 e 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 e . . 
        . e e e e e e e e e e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wqueend1.setPosition(73, 113)
}
function Bpawn () {
    Bpawna7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawna7.setPosition(27, 22)
    Bpawnb7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawnb7.setPosition(43, 22)
    Bpawnc7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawnc7.setPosition(58, 22)
    Bpawnd7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawnd7.setPosition(74, 22)
    Bpawne7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawne7.setPosition(87, 22)
    Bpawnf7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawnf7.setPosition(103, 22)
    Bpawng7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawng7.setPosition(120, 22)
    Bpawnh7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bpawnh7.setPosition(133, 22)
}
function Bqueen () {
    Bqueend8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . e . . . . . e . . . . . e . . 
        . e e . . . e e e . . . e e . . 
        . e e e . e e e e e . e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bqueend8.setPosition(73, 7)
}
function Bbishop () {
    Bbishopc8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e e e f e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . e e e . . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bbishopc8.setPosition(58, 8)
    Bbishopf8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . e e f f f e e . . . . . 
        . . . . e e e f e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . e . e . . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . e e e . . . e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bbishopf8.setPosition(103, 8)
}
function Bking () {
    Bkinge8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . e e . a a . e e . . . . 
        . . . e e e e a a e e e e . . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . . e e e e . . e e e e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bkinge8.setPosition(88, 8)
}
function Bknight () {
    Bknightb8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e e e e . . . . . . . 
        . e e 1 e e e e e e . . . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e . e e e e e e e . . . 
        . e e e . . e e e e e e e e . . 
        . . . . . e e e e e e e e e . . 
        . . . e e e e e e e e e e e . . 
        . . . e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bknightb8.setPosition(43, 8)
    Bknightg8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e e e e . . . . . . . 
        . e e 1 e e e e e e . . . . . . 
        e e e e e e e e e e e . . . . . 
        e e e e e e e e e e e e . . . . 
        e e e e e . e e e e e e e . . . 
        . e e e . . e e e e e e e e . . 
        . . . . . e e e e e e e e e . . 
        . . . e e e e e e e e e e e . . 
        . . . e e e e e e e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Bknightg8.setPosition(118, 8)
}
function Wpawn () {
    Wpawna2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wpawna2.setPosition(27, 98)
    wPawnb2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawnb2.setPosition(43, 98)
    wPawnc2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawnc2.setPosition(58, 98)
    wPawnd2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawnd2.setPosition(74, 98)
    wPawne2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawne2.setPosition(87, 98)
    wPawnf2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawnf2.setPosition(103, 98)
    wPawng2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawng2.setPosition(120, 98)
    wPawnh2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . e 1 1 1 1 1 1 1 1 1 1 e . . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        e 1 e e e e e e e e e e e e 1 e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    wPawnh2.setPosition(133, 98)
}
function Wking () {
    Wkinge1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . e e . a a . e e . . . . 
        . . . e 1 1 e a a e 1 1 e . . . 
        . . e 1 1 1 1 e e 1 1 1 1 e . . 
        . . e 1 1 1 1 e e 1 1 1 1 e . . 
        . . . e 1 1 e . . e 1 1 e . . . 
        . . . . e e . . . . e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wkinge1.setPosition(88, 113)
}
function Brook () {
    Wrooka1 = sprites.create(img`
        . e e e . e e e e e e . e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wrooka1.setPosition(28, 8)
    Wrookh1 = sprites.create(img`
        . e e e . e e e e e e . e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        e e e e e e e e e e e e e e e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Wrookh1.setPosition(132, 8)
}
let Wkinge1: Sprite = null
let wPawnh2: Sprite = null
let wPawng2: Sprite = null
let wPawnf2: Sprite = null
let wPawne2: Sprite = null
let wPawnd2: Sprite = null
let wPawnc2: Sprite = null
let wPawnb2: Sprite = null
let Bknightg8: Sprite = null
let Bknightb8: Sprite = null
let Bkinge8: Sprite = null
let Bbishopf8: Sprite = null
let Bbishopc8: Sprite = null
let Bqueend8: Sprite = null
let Bpawnh7: Sprite = null
let Bpawng7: Sprite = null
let Bpawnf7: Sprite = null
let Bpawne7: Sprite = null
let Bpawnd7: Sprite = null
let Bpawnc7: Sprite = null
let Bpawnb7: Sprite = null
let Bpawna7: Sprite = null
let Wqueend1: Sprite = null
let Wknightg1: Sprite = null
let Wknightb1: Sprite = null
let Wpawna2: Sprite = null
let mySprite: Sprite = null
let Wrookh1: Sprite = null
let Wrooka1: Sprite = null
let Wbishopf1: Sprite = null
let Wbishopc1: Sprite = null
scene.setBackgroundImage(assets.image`Chess Board`)
Wpawn()
Bpawn()
Wrook()
Brook()
Wbishop()
Bbishop()
Wknight()
Bknight()
Wking()
Bking()
Wqueen()
Bqueen()
Cursor()
