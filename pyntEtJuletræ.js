
let christmasStar = document.querySelector('#christmas-star')
let StarCoords = christmasStar.getBoundingClientRect()
let christmasTree = document.getElementsByClassName('christmas-tree')[0]
let TreeTop = christmasTree.getBoundingClientRect()
let CTWidth = parseInt(getComputedStyle(christmasTree).getPropertyValue('--CTWidth').replace('px', ''))
let CSWidth = parseInt(getComputedStyle(christmasStar).getPropertyValue('--CSWidth').replace('px', ''))
let clicked = false
let starOnTree = false

christmasStar.ondragstart = () => false

const moveStar = (e) => {
        if (clicked && !starOnTree) {
            StarCoords = christmasStar.getBoundingClientRect()
            christmasStar.style.left = (e.clientX - (CSWidth / 2)) + 'px'
            christmasStar.style.top = (e.clientY - (CSWidth / 2)) + 'px'
        }
}

christmasStar.addEventListener('mousedown', () => {
    clicked = true
})
document.addEventListener('mousemove', (e) => {
    moveStar(e)
})
christmasStar.addEventListener('mouseup', () => {
    clicked = false
    TreeTop = christmasTree.getBoundingClientRect()
    if (StarCoords.x < (TreeTop.x + (CTWidth / 2)) &&
        (StarCoords.x + CSWidth) > (TreeTop.x + (CTWidth / 2)) &&
        StarCoords.y < TreeTop.y &&
        (StarCoords.y + CSWidth) > TreeTop.y) {
        document.getElementsByClassName('firework')[0].style.opacity = '1'
        document.getElementsByClassName('firework')[1].style.opacity = '1'
        starOnTree = true
    }
})

// console.log('x: ' + (TreeTop.x + (CTWidth / 2) + ' ' + 'y: ' + TreeTop.y))
// document.addEventListener('click', e => {
//     console.log(e.clientX, e.clientY)
// })