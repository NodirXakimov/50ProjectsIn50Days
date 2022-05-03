const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/ 5 * 3
    boxes.forEach(box => {
        const topBox = box.getBoundingClientRect().top
        if(topBox < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}