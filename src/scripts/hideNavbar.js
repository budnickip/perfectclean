const hideNavbar = () => {
    let lastScrollTop = 1;
    const navbar = document.querySelector('.navigation');
    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // żeby na iphone przy odbiciu od góry nie chowała się nawigacja
        if(window.pageYOffset > 200){
            if(scrollTop > lastScrollTop){
                navbar.style.top="-100px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
        }
    });
}
export default hideNavbar;