
setInterval(() => {
    let dato = new Date()
    let tidTilJul = new Date("December 24," + dato.getFullYear() + " 0:0:0").getTime()
    let idk = tidTilJul - dato.getTime()

    let sekunder = Math.floor(idk / 1000) % 60
    let minutter = Math.floor(idk / (1000 * 60)) % 60
    let timer = Math.floor(idk / (1000 * 60 * 60)) % 24
    let dage = Math.floor(idk / (1000 * 60 * 60 * 24)) % 31

    countdown = `dage: ${dage}
timer: ${timer}
minutter: ${minutter}
sekunder: ${sekunder}`

    document.querySelector('#countdown').innerHTML = countdown
    console.log(countdown)
}, 1000);

