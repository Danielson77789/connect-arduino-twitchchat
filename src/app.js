import tmi from "tmi.js";
var jFive = require("johnny-five");
let startPos = 0;
var board = new jFive.Board({
  port: "COM3"
});

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identify: {
        username: 'SlabbnSlothsFirstBot',
        password: 'oauth:uoxa1ohv2stvevxnb0drk8ivhnlc2u'
    },
    channels: ['SlabbnSloth']
});

board.on("ready", function() {
    var led = new jFive.Led(9);
    var led2 = new jFive.Led(8);
    //led.blink(500);
    client.connect();
    //let switchLight = false;
    //let speed = 500;
    //const followServo = new jFive.Servo({
    //    pin: 9,
    //    startAt:0
    //});

    function Blink() {
        led.on();
        led.off();
        led2.on();
        led2.off();
    };

    client.on('message', (channel, userstate, message, self) => {
        
        if(self) return;
        //followServo.to(180);
        //followServo.to(0);

        if(message.toLowerCase() === '!slow') {
            Blink();
            //if (startPos >= 5){
            //followServo.to(startPos);
            //startPos -= 5;
            //};
        } else if (message.toLowerCase() === '!fast') {
            led.off();
            //if (startPos <= 180){
            //followServo.to(startPos);
            //startPos += 5;
            //};
        }
    
    });
});    
