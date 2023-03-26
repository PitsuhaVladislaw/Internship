const fs = require('fs'); // *Node.js module for hashing
const { createHash } = require('crypto'); // *Node.js module for hashing

const filesCash = fs.readdirSync('./task2');  // *Node.js module for hashing
const arrHash = [];

for(let fileElem of filesCash) {
    const fileBuffer = fs.readFileSync(`./task2/${fileElem}`);
    const hash = createHash("sha3-256");
    const flResult = hash.update(fileBuffer, 'utf-8').digest('hex');

    arrHash.push(flResult);
}

arrHash.push('vladikpizza02@gmail.com')

const flHashRes = arrHash.sort().join('');
console.log(flHashRes);
console.log(flHashRes.length);