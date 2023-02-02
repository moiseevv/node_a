fs = require('fs');

const data = fs.readFileSync('./sd.txt');
console.log(data.toString());

const {ch, per} = require('./ch');

per(ch, 'frod');

for (const c of ch){
    console.log(c);
}