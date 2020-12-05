
let christmasStar = document.querySelector('#christmas-star')
let StarCoords = christmasStar.getBoundingClientRect()
let christmasTree = document.getElementsByClassName('christmas-tree')[0]
let TreeTop = christmasTree.getBoundingClientRect()
let clicked = false
let starOnTree = false
let CTWidth = parseInt(getComputedStyle(christmasTree).getPropertyValue('--CTWidth').replace('px', ''))

christmasStar.ondragstart = () => false

const moveStar = e => {
    requestAnimationFrame(() => {
        if (clicked && !starOnTree) {
            StarCoords = christmasStar.getBoundingClientRect()
            christmasStar.style.left = (e.clientX - 50) + 'px'
            christmasStar.style.top = (e.clientY - 50) + 'px'
            requestAnimationFrame(moveStar)
        }
    })
}

christmasStar.addEventListener('mousedown', () => {
    clicked = true
})
christmasStar.addEventListener('mousemove', e => {
    moveStar(e)
})
christmasStar.addEventListener('mouseleave', () => {
    clicked = false
})
christmasStar.addEventListener('mouseup', () => {
    clicked = false
    if (StarCoords.x < (TreeTop.x + (CTWidth / 2)) && (StarCoords.x + 100) > (TreeTop.x + (CTWidth / 2)) &&
        StarCoords.y < TreeTop.y && (StarCoords.y + 100) > TreeTop.y) {
        document.getElementsByClassName('firework')[0].style.opacity = '1'
        document.getElementsByClassName('firework')[1].style.opacity = '1'
        starOnTree = true
    }
})

console.log('x: ' + (TreeTop.x + (CTWidth / 2) + ' ' + 'y: ' + TreeTop.y))

//check coordinates with click
// document.addEventListener('click', e => {
//     console.log(e.clientX, e.clientY)
// })