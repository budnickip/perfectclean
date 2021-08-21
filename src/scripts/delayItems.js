const delayItems = () => {
    const allOffers = document.querySelectorAll('.offer-col__paragraph');
    const paperPlane = document.querySelector('.fa-paper-plane');
    window.addEventListener('scroll',()=>{
        let screenPosition = window.innerHeight
        if (paperPlane?.getBoundingClientRect().top < window.innerHeight) {
            paperPlane?.classList.add('activePlane')
        }
        allOffers.forEach(item =>{
            if (item.getBoundingClientRect().top < screenPosition) {
                item.classList.add('active-paragraph');
            }
        })
    })  
}
export default delayItems;