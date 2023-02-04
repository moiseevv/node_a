const EventEm = require('events');

const myEventEm = new EventEm();

const logConDb = () => {
    console.log('connect done');
};

myEventEm.addListener('connected', logConDb);

myEventEm.emit('connected');

myEventEm.off('connected', logConDb);

myEventEm.on('msg', (data) => {
    console.log(`пришло ${data}`);
});

myEventEm.emit('msg','дата здесь')

console.log(myEventEm.getMaxListeners());
console.log(myEventEm.listenerCount('msg'));
console.log(myEventEm.listenerCount('off'));
console.log(myEventEm.listeners('msg'));
console.log(myEventEm.eventNames());

myEventEm.on('error', (error) => {
    console.log(`произошла ошибка ${error.message}`)
})

myEventEm.emit('error', new Error(' this is error'));

const target = new EventTarget();

const logTarget = () => {
    console.log('connectet to target');
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))



