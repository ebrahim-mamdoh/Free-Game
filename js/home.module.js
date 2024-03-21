export class Home{
    constructor(){
      document.querySelectorAll('.nav-link').forEach((link)=>{
        link.addEventListener('click',()=>{
            document.querySelector('.navbar-nav .active').classList.remove('active');
            link.classList.add('active')
        })
      })
    };
}