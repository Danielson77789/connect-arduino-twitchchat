import tmi from "tmi.js";
var jFive = require("johnny-five");
let startPos = 0;

// Only needed if having issues with COM port
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
    client.connect();

    client.on('message', (channel, userstate, message, self) => {
        
        if(self) return;


        if(message.toLowerCase() === '!slow') {
            //Do something when !slow is typed in twitch chat

        } else if (message.toLowerCase() === '!fast') {
            led.off();

        }
    
    });
});    

