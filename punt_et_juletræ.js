
let christmasStar = document.querySelector('#christmas-star')
let clicked = false

christmasStar.ondragstart = () => false

const test = (e) => {
    requestAnimationFrame(() => {
        if (clicked) {
            christmasStar.style.left = (e.clientX - 50) + 'px'
            christmasStar.style.top = (e.clientY - 50) + 'px'
            requestAnimationFrame(test)
        }
    })
}

christmasStar.addEventListener('mousedown', () => {
    clicked = true
})
christmasStar.addEventListener('mouseup', e => {
    clicked = false
})
christmasStar.addEventListener('mousemove', e => {
    test(e)
})