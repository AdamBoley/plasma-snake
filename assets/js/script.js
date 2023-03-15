// let button = document.getElementById('button')
// button.addEventListener('click', reveal)

// function reveal() {
//     let buttonContent = document.getElementById('button-content')

//     buttonContent.style.display = 'block'
// }

let button = document.getElementById('button')
button.addEventListener('click', reveal)

let buttonHide = document.getElementById('button-hide')
buttonHide.addEventListener('click', hide)

function reveal() {
    let content = document.getElementById('jed')

    content.style.display = 'block'
}

function hide(){
    let content = document.getElementById('jed')

    content.style.display = 'none'
}
