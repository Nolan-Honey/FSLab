setInterval(()=>null,1000)
process.on('SIGINT', function() {
    console.log(`Process uptime on interupt ${process.uptime()}`);
    process.exit(console.log(`Process uptime on exit ${process.uptime()}`))
});
   