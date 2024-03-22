export class Home{
    constructor(){
      document.querySelectorAll('.nav-link').forEach((link)=>{
        link.addEventListener('click',()=>{
            document.querySelector('.navbar-nav .active').classList.remove('active');
            link.classList.add('active')

          const category=link.dataset.category
            console.log(category)
            this.getGame(category)
        })
      })
    };



    //function to get the api from ajx
  async  getGame(cat){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '614ceb4784msh3af123fcef4bc71p1cc86fjsn440153362fe7',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options )
    const response =await api.json();
    console.log(response);
    }
}