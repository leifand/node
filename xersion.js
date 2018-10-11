// direct from node api
const util = require('util');
const execFile = util.promisify(require('child_process').execFile); // no shell spawn for exec
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}

getVersion();