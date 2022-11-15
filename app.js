// const projects = [...document.querySelectorAll('.project-section')];
// const projectImages = document.querySelector('.mobile-desktop-preview')


// projects.forEach(project=>{
//     const p = project;
//     console.log(p.firstElementChild)
//     document.addEventListener('scroll', (a)=>{
//     const clientHeight = document.documentElement.clientHeight;
//     const projectY = p.getBoundingClientRect().y;
//     const projectHeight = p.getBoundingClientRect().height;
//     const played = false;

//     if(clientHeight > projectY + projectHeight * 0.3){
//         p.firstElementChild.classList.toggle('animation')
//         // p.firstElementChild.style.animation = 'slideUp 1s forwards cubic-bazier(0.87, 0, 0.13, 1';
//     }

//     })
// })



const preview = document.querySelectorAll('.mobile-desktop-preview');
const about = document.querySelectorAll('.about-project')
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px"
}
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

preview.forEach(slider => {
    appearOnScroll.observe(slider);
})
about.forEach(slider => {
    appearOnScroll.observe(slider);
})








