let button = document.getElementById('button')
button.addEventListener('click', reveal)

function reveal() {
    let buttonContent = document.getElementById('button-content')

    buttonContent.style.display = 'block'
}

