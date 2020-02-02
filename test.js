let angle = 0
let r = 100
setInterval(() => {
    let x = ( Math.cos(angle * (180 / Math.PI) ))
    let y = ( Math.sin(angle * (180 / Math.PI) ))

    angle += 1

    if(angle > 360) {
        angle = 0
    }

    // console.log(`Angle: ${ angle } X: ${ x } Y: ${ y }`)
    console.log(`${(r * Math.cos(angle * (180 / Math.PI) )) }`)
}, 500)
