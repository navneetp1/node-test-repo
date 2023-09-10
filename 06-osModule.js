const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`This system has been up for ${Math.floor(os.uptime())} seconds`);

const currOS = {
  name : os.type(),
  release : os.release(),
  totalMemory : os.totalmem(),
  freeMemory : os.freemem()
}

console.log(currOS);