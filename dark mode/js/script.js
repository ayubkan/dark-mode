var chekbox = document.querySelector('input[name=theme]');

chekbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    }else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transiton');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}