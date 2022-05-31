bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallSquare)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("temp=")
    bluetooth.uartWriteNumber(input.temperature())
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    donne_recue = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (donne_recue.includes("on")) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (donne_recue.includes("off")) {
            basic.clearScreen()
        }
    }
})
let donne_recue = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
