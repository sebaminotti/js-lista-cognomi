//creiamo una lista cognomi poi chiediamo all'utente il suo cognome
//inseriamo il tutto in un array che ordineremo alfabeticamente
// e poi dichiariamo la posizione in cui il cognome dell'utente si trova

var cognomi = ["bianchi","rossi","neri","verdi","gialli"]


document.getElementById("lista").innerHTML =" LISTA SENZA L'IMMISSIONE DEL COGNOME UTENTE E SENZA ORDINARE IN ORDINE ALFABETICO " + "<li>"+ cognomi + "</li>"  


var utente = prompt("inserisci il tuo cognome").toLowerCase();

cognomi.push(utente)

var posizioneUmana 

for( var i = 0; i < cognomi.length; i++) {

    document.getElementById("listaCognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
    
    
    if (utente == cognomi.sort()[i]) {
        posizioneUmana = i+1 ;
     document.getElementById("umana").innerHTML = "Il tuo cognome : " + utente + " , " + " La tua posizione umana :" + posizioneUmana;
        
    }
    
}

