# gioco_memory_JavaScript
Il Memory è un gioco di memoria in cui il giocatore deve trovare tutte le coppie di colori identici nascoste sotto delle tessere. Lo scopo del gioco è scoprire tutte le coppie nel minor numero di mosse possibile.

Come si gioca
All'inizio del gioco viene generato un campo da 20 celle (disposte in una griglia).
Ogni cella nasconde un colore. Sono presenti 10 colori diversi, ognuno ripetuto due volte.
Le celle appaiono tutte bianche. Cliccando su una cella, il colore nascosto viene rivelato.
Ogni volta puoi selezionare due celle:
Se i colori delle due celle sono uguali, rimangono visibili.
Se i colori sono diversi, tornano bianche dopo un altro click.
Il gioco continua finché non vengono trovate tutte le coppie di colori.
Quando tutte le coppie sono trovate, viene mostrato un messaggio di vittoria con il numero totale di mosse effettuate.
Logica del Codice
Struttura Generale
Il codice implementa un gioco Memory usando HTML, CSS e JavaScript. Alla pressione del bottone "Rigioca", viene inizializzata una nuova partita.

Flusso del gioco
Inizio partita (inizioGioco(coloriDoppi))
Crea 20 celle bianche sulla griglia (CreazioneCampo()).
Mescola l'array dei colori doppi (shuffleArray(coloriDoppi)).
Aggiunge un event listener a ogni cella per gestire il click.
Click su una cella
Quando una cella viene cliccata:
Le viene assegnato il colore corrispondente dall'array mischiato (assegnaColori()).
Viene salvato l'indice della cella cliccata in un array temporaneo.
Si incrementa il contatore delle mosse.
Controllo delle coppie
Dopo che due celle sono state selezionate:
Se i colori delle due celle coincidono, le celle rimangono colorate e vengono memorizzate come coppia trovata (coppieColoriTrovati).
Se i colori sono diversi, al prossimo click tutte le celle non trovate vengono rese di nuovo bianche.
Vittoria
Quando tutte le 20 celle sono state abbinate correttamente (ovvero quando coppieColoriTrovati.length == 20), viene mostrato un messaggio di vittoria con il numero di mosse fatte.

