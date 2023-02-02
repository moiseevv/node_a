fs = require('fs');

const data = fs.readFileSync('./sd.txt');
console.log(data.toString());

const {ch, per} = require('./ch');

let new_bound = ch
per(new_bound, 'frod');

for (const c of new_bound){
    if (c.name == 'bilb'){
        c.name = 'next_bilb'
    }
    console.log(c);
}