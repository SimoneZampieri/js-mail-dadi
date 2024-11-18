//Mail

//inseriamo delle possibili mail, ergo delle variabili

const mail = [ "simo@gmail.com", "simoz@gmail.com", "vanessa@gmail.com", "vanessasa@gmail.com" ]

//chiedi all'utente la sua mail, controllando che sia nella lista di chi può accedere, stampando un messaggio appropriato sull'esito di controllo.

let convalida = false;

while(!convalida){
    let inserisciMail = prompt('inserisci mail')
    let messaggio = 'mail invalida'

    if(inserisciMail){
        for(let i = 0; i < mail.length; i++) {
       
            if(inserisciMail.toLowerCase() == mail[i]){
                messaggio = 'mail valida' 
                convalida = true;
            }    
        }
    }
       
    console.log(messaggio)
}





