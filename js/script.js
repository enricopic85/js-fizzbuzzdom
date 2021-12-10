//Scrivi un programma che stampi in console i numeri da 1 a 100.
for(i=0;i<=100;i++){
    console.log(i);
}

/*MILESTONE 1:
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/
for(i=1;i<=100;i++){
   if (i % 3 ===0 && i % 5 === 0 ) {
       console.log("FizzBuzz")
   } else if (i % 3 ===0) {
       console.log("Fizz");
   } else if (i % 5 === 0) {
       console.log("Buzz");
   } else{
       console.log(i)
   }
   }

/*MILESTONE 2:
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta. */
// for(i=1;i<=100;i++){
//     if (i % 3 ===0 && i % 5 === 0 ) {
//         document.querySelector(".container").innerHTML +="<p>FizzBuzz</p> "
//     } else if (i % 3 ===0) {
//         document.querySelector(".container").innerHTML +="<p>Fizz</p> " // console.log("Fizz");
//     } else if (i % 5 === 0) {
//         document.querySelector(".container").innerHTML +="<p>Buzz</p> " // console.log("Buzz");
//     } else{
//         document.querySelector(".container").innerHTML +=`<p>${i}</p>` 
//     }
//     }

/* MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?*/
for(i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0 ) {
        document.querySelector(".container-box").innerHTML +='<div class="box box-fizzBuzz">fizzBuzz</div>';
    } else if (i % 3 === 0) {
        document.querySelector(".container-box").innerHTML +=`<div class=" box box-fizz">fizz</div>`;  
    } else if (i % 5 === 0) {
        document.querySelector(".container-box").innerHTML +=`<div class="box box-buzz">buzz</div>`;  
    } else{
        document.querySelector(".container-box").innerHTML +=`<div class="box box-empty">${i}</div>`; 
    }
}