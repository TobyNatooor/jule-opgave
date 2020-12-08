
countdownFunc = () => {
    let dato = new Date()
    let tidTilJul = new Date("December 24," + dato.getFullYear() + " 0:0:0").getTime()
    let idk = tidTilJul - dato.getTime()

    let sekunder = Math.floor(idk / 1000) % 60
    let minutter = Math.floor(idk / (1000 * 60)) % 60
    let timer = Math.floor(idk / (1000 * 60 * 60)) % 24
    let dage = Math.floor(idk / (1000 * 60 * 60 * 24)) % 31

    document.querySelector('#dage').innerHTML = 'dage: ' + dage
    document.querySelector('#timer').innerHTML = 'timer: ' + timer
    document.querySelector('#minutter').innerHTML = 'minutter: ' + minutter
    document.querySelector('#sekunder').innerHTML = 'sekunder: ' + sekunder
}

countdownFunc()
setInterval(() => countdownFunc(), 1000);
