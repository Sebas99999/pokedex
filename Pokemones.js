const resul = document.getElementById('resul');
const app1 = document.getElementById('app1')
const app2 = document.getElementById('app2')
const app3 = document.getElementById('app3')
const app4 = document.getElementById('app4')
const app5 = document.getElementById('app5')
const app6 = document.getElementById('app6')
const app7 = document.getElementById('app7')
const app8 = document.getElementById('app8')
const pokemones =['33','34','35','36','37','38','39','40','41','41','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90'];

var indice =parseInt(Math.random(8)*pokemones.length);
var indice2 =parseInt(Math.random(7)*pokemones.length);
var indice3 =parseInt(Math.random(6)*pokemones.length);
var indice4 =parseInt(Math.random(5)*pokemones.length);
var indice6 =parseInt(Math.random(4)*pokemones.length);
var indice7 =parseInt(Math.random(3)*pokemones.length);
var indice8 =parseInt(Math.random(2)*pokemones.length);

const callAPI = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${indice}/`)
    .then(res => res.json())
    .then( data => { 
            app1.innerText = JSON.stringify(data.name); 
         
})
fetch(`https://pokeapi.co/api/v2/pokemon/${indice2}/`)
.then(res => res.json())
.then( data => { 
        app2.innerText = JSON.stringify(data.name); 
})
fetch(`https://pokeapi.co/api/v2/pokemon/${indice3}/`)
.then(res => res.json())
.then( data => { 
        app3.innerText = JSON.stringify(data.name); 
})
fetch(`https://pokeapi.co/api/v2/pokemon/${indice4}/`)
.then(res => res.json())
.then( data => { 
        app4.innerText = JSON.stringify(data.name); 
})
fetch(`https://pokeapi.co/api/v2/pokemon/${indice7}/`)
.then(res => res.json())
.then( data => { 
        app5.innerText = JSON.stringify(data.name); 
})
fetch(`https://pokeapi.co/api/v2/pokemon/${indice8}/`)
.then(res => res.json())
.then( data => { 
        app6.innerText = JSON.stringify(data.name); 
})
}
resul.addEventListener('click',callAPI);







//Ante la pesima obtimizacion de mi codigo, solamente pido disculpas por aquellos cuyos han sido dañados.
//Espero en el futuro poder mejorar mis abilidades como programador.