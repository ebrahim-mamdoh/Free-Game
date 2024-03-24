import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        this.changeActiveLink(link);
        const category = link.dataset.category
        console.log(category)
       this.displayDataGame(category)
      })
    })

    this.ui = new Ui()
    this.getGame('sailing')

  };

  async changeActiveLink(link) {
    document.querySelector('.navbar-nav .active').classList.remove('active');
    link.classList.add('active')


    // this.getGame(category)

  }



  async getGame(cat) {
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '614ceb4784msh3af123fcef4bc71p1cc86fjsn440153362fe7',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
      const response = await api.json();
      this.ui.displayDataGame(response)

      // Check if response is valid
      if (response && Array.isArray(response)) {
        return response;
      } else {
        throw new Error('Invalid API response');
      }
    } catch (error) {
      console.error('Error fetching game data:', error);
      return []; // Return an empty array or handle the error as appropriate
    }

  }

}












