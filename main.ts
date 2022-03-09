input.onButtonPressed(Button.A, function () {
    radio.sendValue("Aanval", 30)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hoi hoe gaat het?")
})
radio.onReceivedValue(function (name, value) {
    Hp += 0 - value
})
let Hp = 69
radio.setTransmitPower(7)
radio.setGroup(69)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (Hp > 50) {
        basic.showIcon(IconNames.Happy)
    } else if (Hp > 30 && Hp <= 50) {
        basic.showIcon(IconNames.Asleep)
    } else if (Hp > 10 && Hp <= 30) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
