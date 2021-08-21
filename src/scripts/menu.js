const menu = () =>{
    const menuBtn = document.querySelector('.menu-btn')
    const navbarLinks = document.querySelector('.navigation__items')
    const navbarLink = document.querySelectorAll('.navigation__item')

    let lastScrollTop = 0;
    let menuOpen = false

    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            if(menuOpen){
                menuBtn.classList.remove('open')
                navbarLinks.classList.remove('active')
                menuOpen = false
            }
        }
        lastScrollTop = scrollTop;
    });


    menuBtn?.addEventListener('click', ()=>{
        if(!menuOpen){
            menuBtn.classList.add('open')
            navbarLinks.classList.add('active')
            menuOpen = true
        } else{
            menuBtn.classList.remove('open')
            navbarLinks.classList.remove('active')
            menuOpen = false
        }
    })

    navbarLink.forEach(link=>{
        link.addEventListener('click', ()=>{
            if(menuOpen){
                menuBtn.classList.remove('open')
                navbarLinks.classList.remove('active')
                menuOpen = false
            }
        })
    })
}

export default menu