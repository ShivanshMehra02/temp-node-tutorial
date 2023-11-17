const os = require ('os')
//built in module me . (dot) nai lagate

const user = os.userInfo();
console.log(user)


//uptime
console.log(`The uptime of the systum is ${os.uptime()} seconds!`); 

const currentos = {
    name: os.type(),
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
} 
console.log(currentos);