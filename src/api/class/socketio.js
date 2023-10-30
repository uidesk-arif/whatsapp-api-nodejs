const { Server } = require('socket.io')

const IO = (server) => {
    return new Server(server, {
        // allowRequest: (req, callback) => {
        //     const OriginHeader = req.headers.origin != undefined;
        //   callback(null, OriginHeader); // only allow requests without 'origin' header
        // },
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
        transports: ['websocket', 'polling'],
    })
}

module.exports = { IO }
