let gioco = true; // stato attuale del gioco (true = in corso, false = terminato)


 // Bottone "Rigioca"
const bottone = document.getElementById("bottone");
bottone.addEventListener("click", function e() {
  inizioGioco(coloriDoppi) // Avvia una nuova partita quando si clicca il bottone
});
  
  
 // Array dei 10 colori base
  const colori = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "cyan", "pink", "lime", "brown"
  ];
  // Array che contiene ogni colore due volte (serve per creare le coppie)
  const coloriDoppi = [...colori, ...colori];

 





// Funzione per mischiare casualmente gli elementi di un array (algoritmo Fisher-Yates
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
      cella.style.backgroundColor = "white"; // Imposta il colore di base delle celle su bianco


  }
  
  }
  
  // Funzione che assegna a una cella il colore corretto basato su array coloriDoppi (senza mostrarlo inizialmente)
  function assegnaColori(celle,gioco,coloriDoppi,i){
   if(gioco){
    celle.style.backgroundColor = coloriDoppi[i]; // Assegna il colore corrispondente
    
   }
  }


 

  

  // Inizializza il gioco
  function inizioGioco(coloriDoppi){
  let countColoriSelezionati = 0;   // Conta quante celle sono state selezionate (massimo 2)
  let coloriSelezionati = [];        // Salva gli indici delle celle selezionate
  let coppieColoriTrovati = [];      // Salva gli indici delle celle che formano coppie corrette
  let mosseFatte = 0;               // Conta il numero di mosse fatte
    CreazioneCampo();               // Ricrea il campo di gioco

     
  shuffleArray(coloriDoppi);        // Mischia i colori prima di assegnarli
  const celle =document.querySelectorAll(".cell");  // Seleziona tutte le celle
 
  const messaggio = document.getElementById("messaggio");
  messaggio.textContent = ""; // Pulisce eventuali messaggi precedenti
  
  gioco = true;  // Reset del gioco in stato "attivo"
  
    // Aggiunge il comportamento di click a ogni cella
    for(let i = 0; i < 20; i++){
      
       
      celle[i].addEventListener("click", function e(){
       assegnaColori(celle[i],gioco,coloriDoppi,i); // Mostra il colore della cella cliccata
       mosseFatte ++;  // Incrementa il contatore delle mosse
       
       if(gioco){

       // Se sono già state selezionate 2 celle, resetta i selezionati
       if(countColoriSelezionati == 2){
        countColoriSelezionati = 0;
        coloriSelezionati = [];
      }
        coloriSelezionati.push(i); // Salva l'indice della cella cliccata
        
        countColoriSelezionati ++;
        
      
       // Ciclo per confrontare la cella selezionata con tutte le altre
       for(let j = 0; j < 20; j++){
        if(j != i){ // Non confrontare una cella con sé stessa
          
          if(celle[i].style.backgroundColor == celle[j].style.backgroundColor){
            // Se i colori coincidono, salva le due celle come "coppia trovata"
            if(!coppieColoriTrovati.includes(i)){
              coppieColoriTrovati.push(i);
            }
            if(!coppieColoriTrovati.includes(j)){
              coppieColoriTrovati.push(j);
            }
            

           
             // Se il colore non coincide e la cella non fa parte delle coppie corrette, nascondila
          }if(!coppieColoriTrovati.includes(j)){
            celle[j].style.backgroundColor = "white";
          }
           // Se tutte le coppie sono trovate (20 celle = 10 coppie), la partita finisce
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
 