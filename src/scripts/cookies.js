const cookies = () =>{
    const btn = document.querySelector('.cookies__button')
    const acceptedCookies = JSON.parse(localStorage.getItem('pc-cookies')) || false;
    if(acceptedCookies){
        btn.parentElement.style.display = "none";
    }else{
        btn.addEventListener('click', ()=>{
            btn.parentElement.style.display = "none";
            localStorage.setItem('pc-cookies', true)
        },{once: true})
    }
}
export default cookies