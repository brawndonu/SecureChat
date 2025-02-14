import { scryptSync, randomBytes } from "crypto";

const password = 'hardcodedpass2';

// generate salt with 16 bytes
const salt = randomBytes(16).toString('hex');

//generate hash using password and salt
const hash = scryptSync(password, salt, 64).toString('hex');

console.log('Salt: ', salt);
console.log('Hash: ', hash);
