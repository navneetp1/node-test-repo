// to use modules , we do that using <the require>

//require('path of the module')

const names = require('./04-names');
const sayHi = require('./05-mod_function');


sayHi(names.Peter);
sayHi(names.John);
