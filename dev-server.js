const path = require('path');
const childProcess = require('child_process');
const chokidar = require('chokidar');

const SERVER_PATH = path.join(process.cwd(), 'dist', 'server.js');

const start = () => {
    console.log('starting new server');
    const instance = childProcess.spawn('node', [SERVER_PATH]);
    instance.stdout.on('data', (data) => console.log(data.toString()));
    instance.stderr.on('data', (data) => console.error(data.toString()));
    return () => {
        console.log('shutting server down');
        instance.kill();
    };
};

let stop = start();

const restart = () => {
    if (stop) {
        stop();
    }
    stop = start();
}

const watcher = chokidar.watch(SERVER_PATH);
watcher.on('change', restart);