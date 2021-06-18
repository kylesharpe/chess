def Wbishop():
    global Wbishopc1, Wbishopf1
    Wbishopc1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wbishopc1.set_position(58, 114)
    Wbishopf1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wbishopf1.set_position(103, 114)
def Wrook():
    global Wrooka1, Wrookh1
    Wrooka1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wrooka1.set_position(28, 114)
    Wrookh1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wrookh1.set_position(132, 114)
def Bpawn():
    global Bpawna7, Bpawnb7, Bpawnc7, Bpawnd7, Bpawne7, Bpawnf7, Bpawng7, Bpawnh7
    Bpawna7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawna7.set_position(27, 22)
    Bpawnb7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawnb7.set_position(43, 22)
    Bpawnc7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawnc7.set_position(58, 22)
    Bpawnd7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawnd7.set_position(74, 22)
    Bpawne7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawne7.set_position(87, 22)
    Bpawnf7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawnf7.set_position(103, 22)
    Bpawng7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawng7.set_position(120, 22)
    Bpawnh7 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bpawnh7.set_position(133, 22)
def Bbishop():
    global Bbishopc8, Bbishopf8
    Bbishopc8 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bbishopc8.set_position(58, 8)
    Bbishopf8 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Bbishopf8.set_position(103, 8)
def Wpawn():
    global Wpawna2, wPawnb2, wPawnc2, wPawnd2, wPawne2, wPawnf2, wPawng2, wPawnh2
    Wpawna2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wpawna2.set_position(27, 98)
    wPawnb2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawnb2.set_position(43, 98)
    wPawnc2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawnc2.set_position(58, 98)
    wPawnd2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawnd2.set_position(74, 98)
    wPawne2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawne2.set_position(87, 98)
    wPawnf2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawnf2.set_position(103, 98)
    wPawng2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawng2.set_position(120, 98)
    wPawnh2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    wPawnh2.set_position(133, 98)
def Brook():
    global Wrooka1, Wrookh1
    Wrooka1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wrooka1.set_position(28, 8)
    Wrookh1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Wrookh1.set_position(132, 8)
wPawnh2: Sprite = None
wPawng2: Sprite = None
wPawnf2: Sprite = None
wPawne2: Sprite = None
wPawnd2: Sprite = None
wPawnc2: Sprite = None
wPawnb2: Sprite = None
Wpawna2: Sprite = None
Bbishopf8: Sprite = None
Bbishopc8: Sprite = None
Bpawnh7: Sprite = None
Bpawng7: Sprite = None
Bpawnf7: Sprite = None
Bpawne7: Sprite = None
Bpawnd7: Sprite = None
Bpawnc7: Sprite = None
Bpawnb7: Sprite = None
Bpawna7: Sprite = None
Wrookh1: Sprite = None
Wrooka1: Sprite = None
Wbishopf1: Sprite = None
Wbishopc1: Sprite = None
scene.set_background_image(assets.image("""
    Chess Board
"""))
Wpawn()
Bpawn()
Wrook()
Brook()
Wbishop()
Bbishop()