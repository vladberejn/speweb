//@ts-check

const openModal = document.getElementById('open-modal')
/** @type {HTMLElement | null} */
const modal = document.querySelector('.modal')
const modalBackGround = document.getElementById('modal-background')
const addBlock = document.getElementById('add-block')
const box = document.querySelector('.box')
let increment = 0

if(openModal) openModal.onclick = function(){
    modal?.classList.add('show')
}

if(modalBackGround) modalBackGround.onclick = function(){
    modal?.classList.remove('show')
}

// if(addBlock) addBlock.onclick = function(){
//     const newDiv = document.createElement('div') // создаем див
//     newDiv.classList.add('elem') // добавляем в див класс
//     const numElem = document.createElement('span') // создаем спан
//     numElem.textContent = increment // помещаем в спан число
//     const butDel = document.createElement('button') // создаем кнопку
//     butDel.textContent = 'Del' // помещаем в кнопку название
//     butDel.addEventListener('click', event => { //помещаем в кнопку листенер по клику
//         console.log('Click')
//         butDel.parentNode.remove() // который удаляет хозяина кнопки
//     })
//     newDiv.append(numElem) // помещаем в див спан
//     newDiv.append(butDel) // помещаем в див кнопку
//     box.append(newDiv) // помещаем див на страницу в див с классом бокс
//     increment ++
// }
if(addBlock) addBlock.onclick = function(){
box.insertAdjacentHTML('beforeend', 
`<div class="elem">
    ${increment}
    <button onclick="event.target.parentElement.remove()">X</button>
</div>`)
increment++
}

function customParseInt(str){
    return Number(str.split('').filter((el) => { //Как заменить filter на reduce 
        return !isNaN(el)
    }).join(''))
} 

function customParseInt2(str){
    return Number(str.split('').filter((el) => !isNaN(el)).join(''))
} 

function numberReduse(str){
    return Number()
}

let i = 'q1w2e3rdfh4t512e'

i.split('').reduce(function(cur, num){return Number(!isNaN(num)?cur + num:cur)},'') 
