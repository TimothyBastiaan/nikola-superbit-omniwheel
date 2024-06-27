basic.forever(function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M2,
    -255
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -255,
    SuperBit.enMotors.M4,
    255
    )
})
