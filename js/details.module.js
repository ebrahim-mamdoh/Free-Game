import { Ui } from "./ui.module.js";



export class Details {
   constructor(id) {
     document.getElementById('btnClose').addEventListener('click', () => {
       document.getElementById('details').classList.add('d-none');
       document.getElementById('home').classList.remove('d-none');
     });
 
     this.getDetails(id);
   }
 
   async getDetails(id) {
     const options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': '614ceb4784msh3af123fcef4bc71p1cc86fjsn440153362fe7',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
       }
     };
 
     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
     const response = await api.json();
     console.log(response);
     new Ui().displayDetails(response);
     
   }
 }
 