//generare un numero randomico da 1 a 6 per il giocatore e per il computer, stabilendo un vincitore in base al punteggio più alto 


//impostiamo due variabili note come i numeri del giocatore e del computer rispettivamente

let numGiocatore = Math.ceil(Math.random()*6)
let numComputer = Math.ceil(Math.random()*6)

//a seguito del tiro, appariranno i seguenti messaggi
console.log( 'Player:' + ' ' + numGiocatore)
console.log( 'Computer:' + ' ' + numComputer)
let messaggio = 'hai perso';

//ora definiamo le condizioni di gioco

if( numGiocatore > numComputer){
    console.log('Player Vince')
} else if( numComputer > numGiocatore ){
    console.log('Computer Vince')
}