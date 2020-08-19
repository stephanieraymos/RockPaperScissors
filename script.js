const selectionButtons = document.querySelectorAll('[data-selection]')
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
selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}