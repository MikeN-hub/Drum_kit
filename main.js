let buttons = Array.from(document.querySelectorAll('.button'));
let symbols = []

buttons.forEach(item=>{
    symbols.push(item.dataset.symbol)
})

buttons.forEach(item =>{
    item.lastChild.textContent = item.dataset.sound
})

document.addEventListener('keydown', e=>{
    buttons.forEach(item=>{
        if(item.dataset.symbol == e.code){
            item.classList.add('active')
            sound(item.dataset.sound)
        }
    })
})

document.addEventListener('keyup', e=>{
    buttons.forEach(item=>{
        if(item.dataset.symbol == e.code){
            item.classList.remove('active')
        }
    })
})

function sound(typeOfSound){
    let audio = new Audio();
    audio.src = `sounds/${typeOfSound}.wav`
    audio.autoplay = 'true'
}