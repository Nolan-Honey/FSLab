var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;
var count = 0;

const setClusterEvents = (cluster) => {
    cluster.on('fork', function(worker) {
        console.log('master: fork event (worker ' + worker.id + ')');
      });
      
      cluster.on('online', function(worker) {
        console.log('master: online event (worker ' + worker.id + ')');
      });
      
      cluster.on('listening', function(worker, address) {
        console.log('master: listening event (worker ' + worker.id + ', pid ' + worker.process.pid + ', ' + address.address + ':' + address.port + ')');
      });
    
      cluster.on('exit', function(worker, code, signal) {
        console.log('master: exit event (worker ' + worker.id + ')');
      });
}

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (var i = 0; i < numWorkers && i <=2; i++) {
      console.log('master: about to fork a worker');
      var worker = cluster.fork();


        // Receive messages from this worker and handle them in the master process.
        worker.on('message', function(msg) {
        console.log('Master ' + process.pid + ' received message from worker:', msg);
        });
          
        // Send a message from the master process to the worker.
        worker.send({msgFromMaster: 'This is from master ' + process.pid + ' to worker.'});
    }

        
     // subscribe event listeners to cluster
     setClusterEvents(cluster);
     
    
  } else {  // child worker processes
      
    console.log('worker: worker #' + process.pid + ' has started');
    // increment the current forked child process

    // Send message to master process.
    process.send({msgFromWorker: 'This is from worker ' + process.pid + '.'})

    // Receive messages from the master process.
    process.on('message', function(msg) {
        console.log('Worker ' + process.pid + ' received message from master.', msg);
    });
  }