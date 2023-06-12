const a = document.getElementsByClassName('content-container')
for(let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}