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

// charge tabs
// there a away to make this work with only css but i cannot do this
// so i make this in js

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
    let tagP3 = document.createElement('p')
    let tagD = document.createElement('div')
    let painel = document.querySelector('.task-list')

    tagP.innerHTML = 'Task: '
    tagP.innerHTML += input
    tagP2.innerHTML = 'Date: '
    tagP2.innerHTML += formatDate.toLocaleDateString('en-EN', optionsFormatDate)
    tagP.style.position = 'absolute'
    tagP2.style.marginLeft = '40%'
    tagP3.innerHTML = 'Priority: '
    tagP3.style.position = 'absolute'
    tagP3.style.marginLeft = '80%'
    tagP3.innerHTML += input3

    if (input3 === 'Low') {
        let priorityC1 = document.createElement('p')
        priorityC1.style.position = 'absolute'
        priorityC1.style.width = '10px'
        priorityC1.style.height = '10px'
        priorityC1.style.borderRadius = '100%'
        priorityC1.style.borderStyle = 'none'
        priorityC1.style.boxShadow = 'none'
        priorityC1.style.right = '3%'
        priorityC1.style.marginTop = '25px'
        priorityC1.style.backgroundColor = '#3CCF4E'
        tagD.appendChild(priorityC1)
        }
    else if (input3 === 'Medium') {
        let priorityC2 = document.createElement('p')
        priorityC2.style.position = 'absolute'
        priorityC2.style.width = '10px'
        priorityC2.style.height = '10px'
        priorityC2.style.borderRadius = '100%'
        priorityC2.style.borderStyle = 'none'
        priorityC2.style.boxShadow = 'none'
        priorityC2.style.right = '3%'
        priorityC2.style.marginTop = '25px'
        priorityC2.style.backgroundColor = '#EBF400'
        tagD.appendChild(priorityC2)
    }
    else (input3 === 'High') {
        let priorityC3 = document.createElement('p')
        priorityC3.style.position = 'absolute'
        priorityC3.style.width = '10px'
        priorityC3.style.height = '10px'
        priorityC3.style.borderRadius = '100%'
        priorityC3.style.borderStyle = 'none'
        priorityC3.style.boxShadow = 'none'
        priorityC3.style.right = '3%'
        priorityC3.style.marginTop = '25px'
        priorityC3.style.backgroundColor = '#FF0303'
        tagD.appendChild(priorityC3)
    }

    painel.appendChild(tagD)
    tagD.appendChild(tagP)
    tagD.appendChild(tagP2)
    tagD.appendChild(tagP3)
    dialogTask.close()

}
