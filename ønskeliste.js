
let ønske = document.querySelector('#ønske')
let liste = document.querySelector('#liste')
let ønskButton = document.querySelector('#ønskButton')

const buttonClick = () => {
    if (ønske.value) {
        liste.innerHTML += '<li>' + ønske.value + '</li>'
        ønske.value = ''
    }
}

ønskButton.addEventListener('click', () => buttonClick())
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        buttonClick()
    }
})
