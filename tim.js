const start = performance.now();
setTimeout(()=>{
    console.log(performance.now()- start)
    console.log('pass second')
},1000
)

const interval = setInterval(()=>{
    console.log('done in interval = '+performance.now());
}, 1000);

setTimeout(()=>{
    clearInterval(interval);
    console.log('clear interval');
},3000)


setImmediate(()=>{
    console.log('last done')
});

console.log("the lasted")

// Если 2000 то успевает выполниться , если 5000 то успеет отработать   unref
const timer_two = setTimeout(()=>{
    console.log('check timer_two')
},5000);

timer_two.unref();

setImmediate (()=>{
    timer_two.ref()
})