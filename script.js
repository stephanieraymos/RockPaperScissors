const selectionButton = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissors'

    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'

    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'

    }
]
selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    console.log(computerSelection)
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length) /*Selection of either 0, 1 or 2*/
    return SELECTIONS[randomIndex]
}