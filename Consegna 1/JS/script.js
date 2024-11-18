//Mail

//chiedi all'utente la sua mail, controllando che sia nella lista di chi può accedere, stampando un messaggio appropriato sull'esito di controllo.

let inserisciMail = parseInt(prompt('inserisci mail'))

//ora inseriamo delle possibili mail, ergo delle variabili

const mail = ['simo@gmail.com', 'simoz@gmail.com', 'vanessa@gmail.com', 'vanessasa@gmail.com' ]

//a questo punto, il console log dovrà validare la mail che verrà inserita dall'utente se è compresa nell'elenco

if( mail.includes(inserisciMail)){
    console.log('Benvenuto')
    alert('Benvenuto')
}