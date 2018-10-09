const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function yessu() {
  const { stdout, stderr } = await exec('su systemctl stop mysql');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

yessu();