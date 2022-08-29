//ejemplo do..while
/*let numero =parseInt(prompt ("ingresa un numero"))
let iteracion = 1
do{
    numero = numero + 5
    console.log(numero)
    iteracion++
}while(iteracion <= 8)*/

/*ejm de while 

let suma = 0
let numero = parseInt(prompt("ingresa un numero"))

while(suma <= 30){
    suma = suma + numero
    numero = parseInt(prompt ("la suma va en "+suma+",ingresa otro numero"))

    if(suma+numero > 30 ){
        break
    }
}

alert("la suma es: ",suma)*/

/*let numero = parseInt (prompt("ingrese un numero"))

while(numero<=10 || numero >20){
    numero = parseInt(prompt("ingrerse otro numero"))
}
alert("el numero infresado es: "+numero)*/

//ejemplo con nombres

let nombre = prompt("ingresa un nombre")

do{
    alert("Bienvenido"+ nombre)
    nombre = prompt("ingresa un nombre")
}
while(nombre !== "juan")
alert("no eres juan"+nombre)

