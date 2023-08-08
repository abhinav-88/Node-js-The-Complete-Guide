// const { Server } = require('socket.io')
let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST", "DELETE", "PUT"]
            }            
        });
        return io;
    },
    getIO: () => {
        if( ! io ) {
            throw new Error('Socket.io not initialized');
        }
        return io;
    }
};

// module.exports = {
//     init: httpServer => {
//       io = new Server(httpServer, {
//         cors: {
//           origin: '*',
//           allowedHeaders: '*',
//           credentials: true
//         }
//       })
//       return io
//     },
//     getIO: () => {
//       if (!io) {
//         throw new Error('socket.io connection unestablished.')
//       }
//       return io
//     }
//   }