let gioco = true; // stato del gioco


 // Bottone "Rigioca"
const bottone = document.getElementById("bottone");
bottone.addEventListener("click", function e() {
  inizioGioco(coloriDoppi)
});
  
  
  // 1. Array di 10 colori, ogni colore ripetuto 2 volte
  const colori = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "cyan", "pink", "lime", "brown"
  ];
  const coloriDoppi = [...colori, ...colori];

 





//funzione per mescolare gli elementi dell'array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // indice casuale da 0 a i
      [array[i], array[j]] = [array[j], array[i]];   // scambia gli elementi
    }
  }
  



  //funzione per creare il campo di gioco
  function CreazioneCampo() {

    const board = document.getElementById("board");
    board.innerHTML = " ";  // svuota il campo
    for(let i = 0; i< 20; i++){
      // crea 20 celle con ID da 0 a 19
      board.innerHTML += `<div class="cell col-3  border d-flex align-items-center justify-content-center" id="${i}"></div>`
      const cella = document.getElementById(i);
      cella.style.backgroundColor = "white";


  }
  
  }
  
  // Funzione che assegna i colori randomici a tutte le celle della board(con rip di 2) senza mostrarli a schermo
  function assegnaColori(celle,gioco,coloriDoppi,i){
   if(gioco){
    celle.style.backgroundColor = coloriDoppi[i]; // assegna colore random
    console.log(coloriDoppi[i]);
   }
  }


 

  

  // Inizializza il gioco
  function inizioGioco(coloriDoppi){
  let countColoriSelezionati = 0;
  let coloriSelezionati = [];
  let coppieColoriTrovati = [];
  let mosseFatte = 0;
    CreazioneCampo();

     // 2. Mischia i colori
  shuffleArray(coloriDoppi);
  const celle =document.querySelectorAll(".cell");
 
  const messaggio = document.getElementById("messaggio");
  messaggio.textContent = ""; // reset messaggio
  
  gioco = true;
  
  
    for(let i = 0; i < 20; i++){
      
        // Aggiungi event listener alle celle
      celle[i].addEventListener("click", function e(){
       assegnaColori(celle[i],gioco,coloriDoppi,i);
       mosseFatte ++;
       
       if(gioco){

       
       if(countColoriSelezionati == 2){
        countColoriSelezionati = 0;
        coloriSelezionati = [];
      }
        coloriSelezionati.push(i);
        console.log(coloriSelezionati);
        countColoriSelezionati ++;
        console.log(countColoriSelezionati);
      
       //ciclare su tutte le celle
       for(let j = 0; j < 20; j++){
        if(j != i){
          console.log(celle[j].style.backgroundColor);
          if(celle[i].style.backgroundColor == celle[j].style.backgroundColor){
            if(!coppieColoriTrovati.includes(i)){
              coppieColoriTrovati.push(i);
            }
            if(!coppieColoriTrovati.includes(j)){
              coppieColoriTrovati.push(j);
            }
            

           
            
          }if(!coppieColoriTrovati.includes(j)){
            celle[j].style.backgroundColor = "white";
          }
          if(coppieColoriTrovati.length == 20){
            messaggio.textContent = "Partita terminata, hai vinto! Hai fatto " + mosseFatte + " mosse.";
            gioco = false;
          }
        }
          
       }
      
      
      }
      });
    
      
     
    }
   
  }
 