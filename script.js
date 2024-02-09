/*Javascript è un linguaggio di programmazione che viene interpretato lato browser e appartiene ai linguaggi detti "Debolmente tipizzati", ovvero
linguaggi in cui non viene specificato alcun "tipo" per le variabili,permettendoci di inserire qualsiasi tipo di dato/valore in ogni variabile, questo permette 
una grande libertà ma di contro comporterà un aumento delle probabilità di errore (e di conseguenza necessiterà di maggiori controlli di sicurezza)
*/

/* Esercizio 1 :  Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 In Javascript esistono 5 principali datatype e sono:
 

Stringhe : Dati solitamente composti da un valore tra apici (es. "nome", "10")
Numeri : Dati numerici (es. 10,3,4)
Booleani : E' il risultato booleano dei dati che sottoponiamo a calcolo,e possono essere solo 2 = True e False
Undefined : E' il "Dato" che ci viene restituito in caso di dati assenti 
Null : E' il "Dato" che ci viene restituito in caso il dato chiamato in calcolo non abbia alcun valore al suo interno
*/

// Esercizio 2 : Scrivi il codice necessario ad effettuare un addizione (una somma) 
let somma = 10 + 20
console.log(somma);

// Esercizio 3 : Crea una variable di nome "x" e assegna ad essa il numero 12.

let x = 12

// Esercizio 4 : Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

let name = "Gabriele Romano"

// Esercizio 5 : Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

let result = x - 4
console.log(result);

// Esercizio 6 : Crea un oggetto di Javascript che ti rappresenti (nome, cognome, età)
let obj = {name : "Gabriele", surname : "Romano", age : 31, job : "Junior software engineer" , hobby : "Videogames, Soccer, Jogging, Gym"};
console.log(obj);

/* Esercizio 7 : Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";


console.log(name1 == name2);


console.log(name1.toLowerCase() == name2.toLowerCase() );
console.log(name1.toLowerCase() === name2.toLowerCase() );

// Versione con entrambi i name trasformati in UpperCase (ovvero maiuscoli)
console.log(name1.toUpperCase() == name2.toUpperCase() );
console.log(name1.toUpperCase() === name2.toUpperCase() );