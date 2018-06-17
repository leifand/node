const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function longProcess() {
  const { stdout, stderr } = await exec('ps aux | grep ssh');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

async function shortProcess() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

function fastProcess() { console.log("That was fast!") };

longProcess();
shortProcess();
fastProcess();