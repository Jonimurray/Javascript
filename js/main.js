
let nombreUser = prompt("Ingresa tu nombre");

console.log("Bienvenido/a " + nombreUser)

let respuestaCorrecta = "50";
function pregunta() {
    let ingresar = false;
    for (let i = 2; i>= 0; i--) {
        let preguntaUnica = prompt("¿cuantos presidentes tuvo Argentina en su historia? Tenes " + (i+1) 
        + " oportunidades (pista: se festeja al llegar a la mitad de tu vida)");
        if (preguntaUnica === respuestaCorrecta){
            alert("Bienvenido/a " + nombreUser + " parece que sabes de historia, ¿sera lo tuyo la programacion? ");
            ingresar = true;
            break;
        }else{
            alert("ups, alguien no paso historia en la secu :p");    
        }
    }
    return ingresar;
}

if(pregunta()) {
    let opcion = prompt( "Excelente " + nombreUser +
    " elige tu recompensa: \n1 - foto con Messi  \n2 - q Messi gane el mundial \n3 - titulo de Full Stack insta \n4 - no quiero recompensa");
    //opciones
    while(opcion != "4" && opcion != "4"){
       
        switch (opcion) {
            case "1":
                alert("Messi no entiende de programacion, lo sentimos " + nombreUser);
                break;
            case "2":
                alert("ANULAMOS CUALQUIER TIPO DE MUFA ");
                break;
            case "3":
                alert("como si esas cosas pasaran");
                break;
        
            default:
                break;
        }
        opcion=prompt( "Excelente " + nombreUser +
        " elige tu recompensa: \n1 - foto con Messi  \n2 - q Messi gane el mundial \n3 - titulo de Full Stack insta \n4 - no quiero recompensa");
    }
}




