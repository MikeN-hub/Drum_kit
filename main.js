
let cells = []
let buttons = document.querySelectorAll('.button');
buttons.forEach(item =>{
    item.firstChild.textContent = item.dataset.symbol.toUpperCase()
    item.lastChild.textContent = item.dataset.sound
    cells.push(item.dataset.symbol)
})

document.addEventListener('keydown', e=>{
    if(cells.includes(e.key)){
        buttons.forEach(item=>{
            item.classList.remove('active')
        })
        buttons[cells.indexOf(e.key)].classList.add('active')
        sound()
}
})

function sound(typeOfSound){
    let audio = new Audio();
    audio.src = `sounds/${typeOfSound}.wav`
    audio.autoplay = 'true'
}