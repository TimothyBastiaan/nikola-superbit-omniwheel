enum Movement {
    //% block="Forward"
    Forward = 1,
    //% block="Backward"
    Backward = 2,
    //% block="Left"
    Left = 3,
    //% block="Right"
    Right = 4,
    //% block="Crab-Left"
    CLeft = 5,
    //% block="Crab-Right"
    CRight = 6,
    // Add more protocols as needed
}


/**
 * Custom blocks
 */
//% weight=20 color=#0fbc11 icon="\uf085"
namespace NikolaOmniwheel {
    /**
     * @param command car movement, eg: Movement.Forward
     * @param speed speed value, eg: 0
     */
    //% blockId="nikola omniwheel" block="Omniwheel move %command speed %speed "
    //% weight=91 blockGap=8
    //% speed.min=0 speed.max=255
    //% parts="nikolaOmniwheel"

    export function omniwheelMovement(command: Movement, speed: number): void {
        if (command == Movement.Forward) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4, speed);
        }
        else if (command == Movement.Backward) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4, -1 * speed);
        }
        else if (command == Movement.Left) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3,  speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4,  speed);
        }
        else if (command == Movement.Right) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4, -1 * speed);
        }
        else if (command == Movement.CLeft) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4, -1 * speed);
        }
        else if (command == Movement.CRight) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, speed);
            SuperBit.MotorRun(SuperBit.enMotors.M2, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M3, -1 * speed);
            SuperBit.MotorRun(SuperBit.enMotors.M4, speed);
        }
    }

    /**
     * @param speed1 motor1 speed, eg:0
     * @param speed2 motor2 speed, eg:0
     * @param speed3 motor3 speed, eg:0
     * @param speed4 motor4 speed, eg:0
     */
    //% blockId="nikola omniwheel individual" block="Omniwheel move m1 %speed1 m2 %speed2 m3 %speed3 m4 %speed4"
    //% weight=91 blockGap=8
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% speed3.min=-255 speed3.max=255
    //% speed4.min=-255 speed4.max=255
    //% parts="nikolaOmniwheel"
    export function individualMovement(speed1: number, speed2: number, speed3: number, speed4: number): void {
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed1);
        SuperBit.MotorRun(SuperBit.enMotors.M2, speed2);
        SuperBit.MotorRun(SuperBit.enMotors.M3, speed3);
        SuperBit.MotorRun(SuperBit.enMotors.M4, speed4);
    }
}
