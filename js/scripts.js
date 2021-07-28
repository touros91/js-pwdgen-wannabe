// chiedo nome all'utente 
var nome = prompt("Inserisci il tuo nome");
// chiedo cognome all'utente 
var cognome = prompt("Inserisci il tuo cognome");
// chiedo colore preferito all'utente 
var colore = prompt("Inserisci il tuo colore preferito");
// dichiaro una variabile che contiene i valori delle tre variabili precedenti 
var info = nome + cognome + colore + 40;
// mostro nella pagine nome, cognome, colore preferito e numero della classe Boolean
document.getElementById("password").innerHTML += info;
