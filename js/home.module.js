import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        this.changeActiveLink(link);
      })
    })

    this.ui = new Ui()
  };

  async changeActiveLink(link) {
    document.querySelector('.navbar-nav .active').classList.remove('active');
    link.classList.add('active')

    const category = link.dataset.category
    console.log(category)
    // this.getGame(category)
    const categoryData = await this.getGame(category);
    this.ui.displayDataGame(categoryData)
  }


  //function to get the api from ajx
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













// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }