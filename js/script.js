// Lista Cognomi
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomiListEl = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeEl = prompt ('Inserisci il tuo cognome');
// rendo l'iniziale maiuscola se non fosse stata già inserita
var cognomeElCapitalized = cognomeEl.charAt(0).toUpperCase() + cognomeEl.slice(1)

// inserisco una variabile per la posizione del cognome

// inserisco il cognome nell'Array
cognomiListEl.push(cognomeElCapitalized);

// ordino alfabeticamente l'array aggiornato
cognomiListEl.sort();

console.log (cognomiListEl);

var cognomePosEl = 0;

// stampo la lista ordinata alfabeticamente
for (var i = 0; i < cognomiListEl.length; i++) {
  document.getElementById('cognomiList').innerHTML += ('<li>') +  cognomiListEl[i] +  ('</li>');
  if(cognomeElCapitalized == cognomiListEl[i]) {
    congnomePosEl = i;
  }
  console.log('cognomePosEl=', cognomePosEl);
  console.log('lista', cognomiListEl);
}
console.log(cognomeEl);
document.getElementById('posizione').innerHTML += (cognomePosEl);
console.log(cognomePosEl)
