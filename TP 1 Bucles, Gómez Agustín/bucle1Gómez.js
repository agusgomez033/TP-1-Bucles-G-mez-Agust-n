//saludo usuario
alert("Bienvenido al Sistema!");

//ingreso variable
let numero = " ";

//hago un bucle mediante un while
while( numero != "S" ){
     //pido datos al usuario
    numero = parseFloat(prompt("Escriba un numero para mostrar su siguiente"));
    
    //uso un if para que el usuario pueda ingresar el numero que quiera sin limite
    if( numero <= Infinity){
        numero = numero + 1;
        console.log(numero);
    }
    //utilizo el else para que si el usuario ingresa un caracter no numeral le de ERROR
    else{
        console.log("ERROR");
    }
    
    //le doy la opcion al usuario de salir o seguir utilizando el sistema
    numero = prompt("S para cerrar el sistema - Para seguir ejecutando pulse cualquier tecla");

}

