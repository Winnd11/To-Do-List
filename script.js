const settings = document.querySelector('#settings')
const notifications = document.querySelector('#notifications')
const dialog = document.querySelector('dialog')

// Home //

document.querySelector('#home').addEventListener('change', homeTab)
document.querySelector('#members').addEventListener('change', membersTab)
document.querySelector('#task').addEventListener('change', taskTab)
document.querySelector('#faq').addEventListener('change', faqTab)

settings.addEventListener('click', settingsModal)
notifications.addEventListener('click', notificationsModal)

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target === dialog) {
        dialog.close()
    }
})

function settingsModal() {
    dialog.showModal()
}

function notificationsModal() {
    dialog.showModal()
}

// config for date

var date = new Date()

const optionsDate = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
}

document.querySelector('.today-day p:nth-child(1)').textContent = date.toLocaleDateString('en-EN', optionsDate)
console.log(date.toLocaleDateString('en-EN', optionsDate))

const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
}

setInterval(function() {
    for (let i = 0;i==0; i++) {
        let time = new Date()

        document.querySelector('.today-day p:nth-child(2)').textContent = time.toLocaleTimeString('en-EN', optionsTime)
    }
}, 1000);

function homeTab() {
    document.querySelector('.tab-content-1').style.display = 'initial'
    document.querySelector('.tab-content-2').style.display = 'none'
    document.querySelector('.tab-content-3').style.display = 'none'
    document.querySelector('.tab-content-4').style.display = 'none'
}

function membersTab() {
    document.querySelector('.tab-content-1').style.display = 'none'
    document.querySelector('.tab-content-2').style.display = 'initial'
    document.querySelector('.tab-content-3').style.display = 'none'
    document.querySelector('.tab-content-4').style.display = 'none'
}

function taskTab() {
    document.querySelector('.tab-content-1').style.display = 'none'
    document.querySelector('.tab-content-2').style.display = 'none'
    document.querySelector('.tab-content-3').style.display = 'initial'
    document.querySelector('.tab-content-4').style.display = 'none'
}

function faqTab() {
    document.querySelector('.tab-content-1').style.display = 'none'
    document.querySelector('.tab-content-2').style.display = 'none'
    document.querySelector('.tab-content-3').style.display = 'none'
    document.querySelector('.tab-content-4').style.display = 'initial'
}

//---------------- Task ----------------//

const newTask = document.querySelector('#new-task')
const dialogTask = document.querySelector('#dialog-task')

newTask.addEventListener('click', newDialog)

function newDialog() {
    dialogTask.showModal()
}

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target === dialogTask) {
        dialogTask.close()
    }
})

function add() {
    let input = document.querySelector('#input-1').value
    let input2 = document.querySelector('#input-2').value
    let input3 = document.querySelector('#priority').value

    var formatDate = new Date(input2)
    formatDate.setDate(formatDate.getDate()+1)

    const optionsFormatDate = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    }

    let tagP = document.createElement('p')
    let tagP2 = document.createElement('p')
    let tagD = document.createElement('div')
    let painel = document.querySelector('.task-list')
    let priorityColor;

    tagP.innerHTML = 'Task: '
    tagP.innerHTML += input
    tagP2.innerHTML = 'Date: '
    tagP2.innerHTML += formatDate.toLocaleDateString('en-EN', optionsFormatDate)
    tagP.style.position = 'absolute'
    tagP2.style.marginLeft = '40%'

    if (input3 === 'Low') {
        priorityColor = '#3CCF4E';
        }
    else if (input3 === 'Medium') {
        priorityColor = '#EBF400';
    }
    else {
        priorityColor = '#FF0303';
    }

    let priorityCircle = document.createElement('p')
    priorityCircle.style.position = 'absolute'
    priorityCircle.style.width = '10px'
    priorityCircle.style.height = '10px'
    priorityCircle.style.borderRadius = '100%'
    priorityCircle.style.borderStyle = 'none'
    priorityCircle.style.boxShadow = 'none'
    priorityCircle.style.right = '3%'
    priorityCircle.style.marginTop = '25px'
    priorityCircle.style.backgroundColor = priorityColor
    
    painel.appendChild(tagD)
    tagD.appendChild(tagP)
    tagD.appendChild(tagP2)
    tagD.appendChild(priorityCircle)
    dialogTask.close()

}
