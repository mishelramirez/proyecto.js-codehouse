let horasTrabajadas = prompt("cuantas horas trabajo esta semana ")
let profesion = prompt("eres ingeniero, medico o programador")
let horasExtras
let horasReglamentarias = 40
let pago
let valorHora

if(profesion==="ingeniero"){
    valorHora = 40
}
else if (profesion==="medico"){
    valorHora = 45
}
else if (profesion==="programador"){
    valorHora = 50
}
else{
    alert("no analizamos tu profesion")
}

if (
    horasTrabajadas > 40 &&
     horasTrabajadas <= 60 &&
    (profesion === "ingeniero" || profesion === "medico")
    ){
    horasExtras = horasTrabajadas - horasReglamentarias
    pago = horasReglamentarias * valorHora + horasExtras *(1.5*valorHora)
}

else if( horasTrabajadas > 60 &&
    (profesion === "ingeniero" || profesion === "medico")
    ){
    horasExtras = horasTrabajadas - horasReglamentarias
    pago = horasReglamentarias * valorHora + horasExtras *(2.5*valorHora)
}

else if(
    horasTrabajadas > 40 &&
    horasTrabajadas<= 60 &&
    profesion === "programador"){
    horasExtras = horasTrabajadas - horasReglamentarias
    pago = horasReglamentarias * valorHora + horasExtras *(2*valorHora)
}
else if (horasTrabajadas > 60 && profesion === "programador"){
    horasExtras = horasTrabajadas - horasReglamentarias
    pago = horasReglamentarias + valorHora + horasExtras *(3*valorHora)
}

else {
    pago = horasTrabajadas * valorHora 
}

alert("hola " +profesion+ "tu pago de esta semana es: " + pago)

//estructura corta

if(horasTrabajadas > 40 && horasTrabajadas <= 60 ){
    horasExtras = horasTrabajadas - horasReglamentarias
    if(profesion === "ingeniero" || profesion === "medico"){
        pago = horasReglamentarias + valorHora + horasExtras *(1.5*valorHora) 
    }else{
         pago = horasReglamentarias + valorHora + horasExtras *(2*valorHora)
    }

}
else if(horasTrabajadas > 60){
    horasExtras = horasTrabajadas - horasReglamentarias
    if(profesion === "ingeniero" || profesion === "medico"){
        pago = horasReglamentarias + valorHora + horasExtras *(2.5*valorHora)
    } 
    else{
        pago = horasReglamentarias + valorHora + horasExtras *(3*valorHora)
    }
} else{
    pago = horasTrabajadas * valorHora 
}
