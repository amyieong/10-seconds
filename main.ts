let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        if (Math.randomBoolean()) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Diamond)
                basic.showIcon(IconNames.SmallDiamond)
            }
        } else if (false) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Ghost)
                basic.showIcon(IconNames.Skull)
            }
        } else {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Chessboard)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - 10000)
    basic.showNumber(score)
})
