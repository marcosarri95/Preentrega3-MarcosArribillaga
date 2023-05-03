
class viaje{
    constructor(origen, destino, cantidad, fini, ffin){
        this.origen=origen.toUpperCase();
        this.destino=destino.toUpperCase();
        this.cantidad = parseInt(cantidad);
        this.fini = fini;
        this.ffin = ffin;
    }

}

function valordolar(){
    let dolarof = Math.round((Math.random()*100 + 200)*100)/100; //genera un valor de dolar oficial entre 200 y 300, con 2 decimales
    
    return Math.round((dolarof*1.3)*1.35);
}

function cambiarPagina (){
    let error = false;
    let origen = document.getElementById("origen");
    let destinos = document.getElementById("destinos");
    let cantidad = document.getElementById("cantPersonas");
    let fechaIni = document.getElementById("start");
    let fechaFin = document.getElementById("end");
   if(origen.value=="Seleccionar" || fechaIni.value==""){
    let op = document.getElementById('error1');
    op.textContent = "Debe seleccionar un lugar de origen y una fecha valida";
    error = true;
   }
   if(destinos.value=="Seleccionar" || fechaFin.value==""){
    let op = document.getElementById('error2');
    op.textContent = "Debe seleccionar un lugar de destino y una fecha valida";
    error = true;
   }
   if(cantidad.value==""){
    let op = document.getElementById('error3');
    op.textContent = "Debe ingresar una cantidad de pasajes a comprar";
    error = true;
   }

   if(error==false){

    const via = new viaje(origen.value, destinos.value, cantidad.value, fechaIni.value, fechaFin.value);
    enJSON = JSON.stringify(via);
    localStorage.setItem("viaje", enJSON);
    document.location.href = "./comprar.html";
   }

}


let fin = false;
let opcion;
let pasajes;
let pago;
let origen;
let destino;
let malaEleccion = false;
let bandera = false;
const arrib = ["BUENOS AIRES", "TENESSE", "NEW YORK", "PARANA","CORDOBA", "ROSARIO", "MOSKU","BARCELONA", "MADRID"];

const menu1 = document.getElementById("origen");
for (let i = 0; i < arrib.length; i++) {
    const option = document.createElement('option');
    option.value = arrib[i];
    option.text = arrib[i];
    menu1.appendChild(option);    
}
const menu2 = document.getElementById("destinos");
for (let i = 0; i < arrib.length; i++) {
    const option = document.createElement('option');
    option.value = arrib[i];
    option.text = arrib[i];
    menu2.appendChild(option);    
}

const dolarof = valordolar();
const dol = document.getElementById('dolar');
dol.innerHTML = "El valor del dolar turista es de $"+dolarof;
localStorage.setItem('dolarTurista', dolarof);

let btn = document.getElementById("btnBuscar");
btn.addEventListener("click", cambiarPagina);

function localidades(arrib){
    for (let i=0;i<arrib.length;i++){
        console.log(arrib[i]);
    }
}



/*
do{ 
    console.clear();
    console.log("¡Sea bienvenido a vuelos Dionisio, el mejor lugar para comprar tus pasajes de avión!");
    console.log("¿Desea continuar hacia la compra de los pasajes o consultar nuestra lista de vuelos?");
    opcion = prompt("Para consultar nuestra lista de vuelos ingrese 1, para continuar hacia la compra de pasajes ingrese 2");

    switch(opcion){
            case '1':
                console.log("Lista de destinos diponible");
                localidades(arrib);
            break;


            case '2':
                                console.clear();
                                pasajes = prompt("¿Cuantos pasajes desea comprar?")
                                console.log("¿Desde que localidad desea despegar?");
                                console.log("Lista de localidades disponibles");
                                localidades(arrib);
                                do{
                                origen = prompt("Ingrese alguna localidad dentro de la lista disponible de donde despegar");
                                //aqui evaluaremos si la localidad ingresada por el usuario está dentro de la lista
                                if(arrib.some((el) => el == origen.toUpperCase())){
                                    console.log("¿Hacia que localidad desea ir?");
                                    console.log("Lista de localidades disponibles");
                                    localidades(arrib);
                                    destino = prompt("Ingrese alguna localidad dentro de la lista disponible para destino");
                                    if(arrib.some((el) => el == destino.toUpperCase())){
                                        bandera = true;
                                    }
                                    else{
                                        console.log("No existe la localidad ingresada");    
                                    }
                                }
                                else{
                                    console.log("No existe la localidad ingresada para despegar");
                                }
                            }while (bandera==false);

                            //una vez teniendo la cantidad de pasajes, el origen y el destino se crea el un objeto de la clase viaje
                                const via = new viaje(origen, destino,pasajes);
                                console.clear();

                            //luego se le solicitan al usuario los datos personales, para ello se crea una instancia de la clase Cliente, y se coloca
                            // dentro de un vector de objetos, que en este caso será solamente de clientes.    
                                const clientes = [];
                                for(let i=0;i<pasajes;i++){
                                const clientex = PedirDatosPersonales();
                                clientes.push(clientex);
                                }
                            
                            //luego de cargar los datos personales, se procederá a realizar el cobro mediante tarjeta de crédito/débito.
                                let interes = Math.round((Math.random()*10 + 15)*100)/100; //Genera un interes aleaotorio entre 10 y 25, con 2 decimales
                                
                                let valor = via.valorViaje(dolarof); //invoca al método de la clase viaje para calcular el precio el viaje, con el dolar oficial y los impuestos
                                let cuotas;
                                let ok = false;
                                bandera = false;

                                do{
                                console.log("Metodo de pago:")
                                console.log("1 - Tarjeta de débito (sin recargo)");
                                console.log("2 - Tarjeta de crédito (con recargo)");
                                const ele = prompt("Elija su método de pago");
                                switch(ele){
            
                                    case '1':
                                        console.log("El valor del viaje es de $" + valor);
                                        bandera = true;
                                        break;
                                    case '2':
                                        do{
                                            cuotas = parseInt(prompt("Indique la cantidad de cuotas a pagar el viaje. La cantidad máxima de cuotas permitida es de 12"));
                                            if(cuotas<=12 && cuotas>=1){console.log("EL interés es de %" + interes);
                                            let pFinal = Math.round(valor*(1 + (interes/100)));
                                            console.log("El valor total del viaje es de $" + pFinal);
                                            console.log("El valor de cada cuota es de $" + Math.round(pFinal/cuotas) +" con una cantidad de "+cuotas+" cuotas");
                                            ok = true;
                                            bandera = true;
                                        }
                                            else{
                                                console.log("La cantidad de cuotas no puede ser mayor a 12, ni menor a 1");
                                                ok = false;
                                            }
                                        }while(ok == false);
                                        
                                    break;
                                    default:
                                            console.log("Opción incorrecta, por favor repita la operación");
                                    break;
                                }
                                }while(bandera==false);

                                const tarjetax = PedirDatosTarjeta();
                                MuestraClientesYViaje(clientes, via);
                                console.log("Disfrute de su viaje!");

                                break;
                     
            
            default:
                                    console.clear();
                                    console.log("Opción errónea, por favor, vuelva a intentar la elección");
                                    malaEleccion=true;
            break;
            }
                if(malaEleccion==false){
                    do{
                        opcion = prompt("¿Desea usted continuar comprando pasajes?, 'S' para comprar nuevamente, 'N' para no");
                        if (opcion.toUpperCase() == 'S'){
                            fin = false;
                            console.clear();
                        }
                        else if (opcion.toUpperCase() == 'N'){
                            fin = true;
                            console.clear();
                            console.log("Gracias por comprar, vuelva pronto!");   
                        }
                        else{
                            console.log("Opcion incorrecta, elija S o N"); 
                        }
                    } while (opcion.toUpperCase()!='S' && opcion.toUpperCase()!='N');
                }
                else{
                    fin = false;
                    malaEleccion=false;
                }
                

}while (fin == false);


*/
