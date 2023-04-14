/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
const bici = [
  {
    nome:"Wilier",
    peso: 20
  },
  {
    nome: "Scott",
    peso: 23
  },
  {
    nome: "Bianchi",
    peso: 19
  },
  {
    nome: "Olmo",
    peso: 25
  }
]

console.log(bici);

// bici.forEach((element) => {
  
//   console.log(element);

//    let pesoMinore = Math.min(Math, element.peso)

//    console.log(pesoMinore);

// })

const pesoMinore = bici.reduce((previous, current) => {
  return current.peso < previous.peso ? current : previous;
});

console.log("peso minore è", pesoMinore);

const pesoBiciCercata = document.querySelector(".peso-bici")

pesoBiciCercata.innerHTML += `
      <p>La bici che pesa meno è la ${pesoMinore.nome} che pesa ${pesoMinore.peso}kg</p>
  `





/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
  {
    nome: "Inter",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Milan",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juve",
    punti: 0,
    falliSubiti: 0,
  },
]

console.log(squadre);

 squadre.forEach((element)=>{

   element.punti = Math.floor(Math.random() * 90)
  element.falliSubiti = Math.floor(Math.random() * 90)

 })




const arrayFinale = squadre.map((element) => {
  let nomeFalli = {
    nome: element.nome,
    falli: element.falliSubiti
  };
  return nomeFalli

})

console.log(arrayFinale);




/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

const object = [
  1,4,{nomi: ["anna", "laura", "martina", "veronica"]}
]
console.log(object);
const nomeMezzo = object.filter((nomi) => {
  if(nomi.lenght < 4 && nomi.lenght > 1){

    return true;
  }
  return false
})

console.log(nomeMezzo);