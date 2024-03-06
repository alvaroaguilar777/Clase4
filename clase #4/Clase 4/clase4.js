let numero =[1,2,3,4,5,6,7,8,9,10]
let mult = numero.filter(num=>{return num % 2 === 0});
console.log(mult);

let div = numero.map(num=>{return num /3});
console.log(div)

let acum = numero.reduce((total,num)=>{total+num;
return total+num;})
console.log(acum);

let Comidas = ['Empanadas ', 'Ensalada ', 'Avena ', 'Salchipapa'];
let Serv= Comidas.map(comida=>{
    return comida.concat(" Una Rica ");
});
console.log(Serv);

let filt =Comidas.filter(info=>{return info.startsWith("E")});
console.log(filt);

let datos = [1, 2, 3, 4, 5];
let suma = 0;

datos.forEach(num => {
    suma += num; 
});

const total = suma + datos.length; 
console.log(total);