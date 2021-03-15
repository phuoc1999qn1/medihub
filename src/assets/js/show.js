import $ from 'jquery'
function removeActive() {
    let item = document.querySelectorAll('.happy-avatar')
    item.forEach(x => x.classList.remove("happy-avatar-active"))
    $(this).addClass('happy-avatar-active')
}

function hideDialog() {
    let bg = document.querySelectorAll('.happy-background')
    bg.forEach(x => x.style.display = "none")
}

$(".happy-avatar").click(function () {
    removeActive()
    $(this).addClass('happy-avatar-active')
    hideDialog()
    let rel = $(this).attr('rel')
    document.querySelector(`.happy-background:nth-child(${rel})`).style.display = 'block' 
    document.querySelector(`.happy-background-rep:nth-child(${rel})`).style.display = 'block' 

});

