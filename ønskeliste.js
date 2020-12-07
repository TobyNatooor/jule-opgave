
let ønske = document.querySelector('#ønske')
let liste = document.querySelector('#liste')
let ønskButton = document.querySelector('#ønskButton')

ønskButton.addEventListener('click', () => {
    console.log(ønske.value)
    liste.innerHTML += '<li>' + ønske.value + '</li>'
})
