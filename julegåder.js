
let gådeKnap = document.querySelector('#gåde-button')
let gåde = document.querySelector('#gåde')
let gådeNumber = 0
let gådeArray = [
    'Hvad kan falde om vinteren uden at slå sig? Sne',
    'Hvilke nødder har ingen skal? Pebernødder',
    'Hvad bliver der serveret til postvæsenets julefrokost? Tebreve, postevand og kuvertbrød',
    'Hvad sker der med julegåsen, hvis den fryser? Den får gåsehud',
    'Hvad kalder man en nisse på et EL-værk? En WATT-nisse'
]

skrivRandomGåde = () => {
    let lastGådeNumber = gådeNumber
    while (gådeNumber == lastGådeNumber) {
        gådeNumber = Math.floor(Math.random() * gådeArray.length)
    }
    gåde.innerHTML = gådeArray[gådeNumber]
}

skrivRandomGåde()
gådeKnap.addEventListener('click', () => skrivRandomGåde()) 