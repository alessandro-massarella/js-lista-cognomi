// Lista Cognomi
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomiListEl = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeEl = prompt ('Inserisci il tuo cognome');

// inserisco il cognome nell'Array
cognomiListEl.push(cognomeEl);

// ordino alfabeticamente l'array aggiornato
cognomiListEl.sort();

// stampo la lista ordinata alfabeticamente
for (var i = 0; i < cognomiListEl.length; i++) {
  document.getElementById('cognomiList').innerHTML += ('<li>') +  cognomiListEl[i] +  ('</li>');
}
