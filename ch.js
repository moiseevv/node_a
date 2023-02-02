let ch = [
    {name: "frod", hasRing: false},
    {name: "bilb", hasRing: false},
]

function per(ch, owner){
    ch.map(c=>{
        if (c.name==owner){
            c.hasRing = true
        } else {
            c.hasRing = false
        }
    })
}

module.exports = {ch, per}