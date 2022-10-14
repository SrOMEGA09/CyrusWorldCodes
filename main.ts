input.onButtonPressed(Button.A, function () {
    basic.showString("¡WELCOME TO CYRUS's WORLD!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # . . . #
        . # # # .
        . . # . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1788, 3714, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("¡SEE YA MY FRIEND!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
