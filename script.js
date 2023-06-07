function menuMobile(){
    const btnMenu = document.querySelector('.menu__btn');
    const nav = document.querySelector('.nav');
    btnMenu.addEventListener('click', () => {
        nav.classList.toggle('ativo');
    })
}

menuMobile()

const btns = document.querySelectorAll('.hasChildren');

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var box = this.firstElementChild;

        if(box.style.maxHeight){
            box.style.maxHeight = null;
        } else {
            box.style.maxHeight = box.scrollHeight + "px";
        }
    })
}