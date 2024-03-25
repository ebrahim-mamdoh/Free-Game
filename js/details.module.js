export class Details {
   constructor() {
     document.getElementById('btnClose').addEventListener('click', () => {
       document.getElementById('details').classList.add('d-none');
       document.getElementById('home').classList.remove('d-none');
     });
 
     this.getDetails();
   }
 
   async getDetails() {
     const options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': '614ceb4784msh3af123fcef4bc71p1cc86fjsn440153362fe7',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
       }
     };
 
     const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options);
     const response = await api.json();
     console.log(response);

     
   }
 }
 