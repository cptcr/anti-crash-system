//Anti Crash System
const process = require("node:process");
process.on('unhandledRejection', async (reason, promise) => {
    console.log("unhandled rejection at:", promise, 'reason:', reason)
});

process.on('uncaughtException', (err) => {
    console.log("Uncaught Exception:", err);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log("Uncaught Exception Monitor:", err, origin);
});

process.on('multipleResolves', (err) => {
    console.log('Multiple Resolves:', err);
})

process.on('rejectionHandled', (err) => {
    console.log("rejected handled:", err);
})

process.on('warning', (warning) => {
    console.log("Warning:", warning);
})
