let añoActual = parseInt (prompt("año actual"))
let añoNacimiento = parseInt (prompt("año de nacimiento"))
let resultadoResta = añoActual - añoNacimiento;
let nombreUsuario = prompt("ingresa tu nombre")
const edad = 18 - 70
   // document.write("tu edad actual es: " + resultadoResta);

        alert("tu edad actual es: " + resultadoResta )


        alert("Biernvenido " + nombreUsuario )

            
           

if(resultadoResta<=18){
    alert("eres menor de edad"+ resultadoResta + " no puedes realizar la compra")
    console.log(edad >=  resultadoResta)
    document.write("bienvenido "+ nombreUsuario +" no puedes realizar la compra")
    
}
else if(resultadoResta >= 70){
    alert("eres mayor de 70 años no puedes realizar la compra")
    console.log(edad >=  resultadoResta)
    document.write ("bienvenido " + nombreUsuario + " eres menor de edad no puedes realizar la compra")

}

 else { (resultadoResta=>18)
    alert("eres mayor de edad " + resultadoResta + "  puedes realizar la compra")
    console.log(edad <=  resultadoResta)
    document.write ("bienvenido "+ nombreUsuario + "eres mayor de edad puedes realizar la compra")
{
    wsp =prompt("quieres recibir la factura por wsp")
    wsp.toLowerCase()
    if(wsp =="si")
    alert("ok✔")
}
}