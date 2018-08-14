// with great [threading in javascript] comes great [potential for bugs] -- here be dragons
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

async function fastProcess() { 
  const { stdout, stderr } = await exec('echo \'That was fast!\'');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

longProcess();
shortProcess();
fastProcess();
