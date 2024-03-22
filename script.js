const presents = document.querySelectorAll('.present')
const boxes = document.querySelectorAll('.box')
const presentsBox = document.querySelector('.presents-box')
const chosenBox = document.querySelector('.chosen-box')
const sendBtn = document.querySelector('.send-btn')




presents.forEach(present => {
    present.addEventListener('dragstart', () => {
        present.classList.add('dragged')
    })

    present.addEventListener('dragend', () => {
        present.classList.remove('dragged')
    })
})


boxes.forEach(box => {
    box.addEventListener('dragover', e => {
        e.preventDefault()

        const dragged = document.querySelector('.dragged')
        box.appendChild(dragged)

        handlePresents()
    }) 
})

const handlePresents = () => {
    const chosenPresents = presentsBox.querySelectorAll('.present')
    if(chosenBox.childElementCount > 2) {
        chosenPresents.forEach(present => {
            present.setAttribute('draggable', 'false')
            present.classList.add('present-disabled')
        })

        sendBtn.disabled = false
    } else {
        chosenPresents.forEach(present => {
            present.setAttribute('draggable', 'true')
            present.classList.remove('present-disabled')
        })

        sendBtn.disabled = true
    }
}