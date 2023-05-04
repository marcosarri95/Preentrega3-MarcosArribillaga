class cliente{
    constructor(nombre, apellido, DNI, fnac ,nacionalidad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.fnac = fnac;
        this.nacionalidad = nacionalidad;
    }
    
}

/*
const via = JSON.parse(localStorage.getItem('viaje'));
const formulario2 = document.getElementById('datosPersonas');
for(let i=0;i<=via.cantidad;i++){
let p1 = document.createElement('div');
p1.className = "container";
let p2 = document.createElement('p');
p2.textContent = "Ingrese el nombre de la persona " +(i+1);
p1.appendChild(p2);
let p3 = document.createElement('input');
p3.className = "nombre";
p3.input="text";
p1.appendChild(p3);
formulario2.appendChild(p1);

let p4 = document.createElement('div');
p4.className = "container";
let p5 = document.createElement('p');
p5.textContent = "Ingrese el apellido de la persona "+(i+1);
p4.appendChild(p5);
let p6 = document.createElement('input');
p6.className = "apellido";
p6.input="text";
p4.appendChild(p6);
formulario2.appendChild(p4);

let p7 = document.createElement('div');
p7.className = "container";
let p8 = document.createElement('p');
p8.textContent = "Ingrese el DNI "+(i+1);
p7.appendChild(p8);
let p9 = document.createElement('input');
p9.className = "dni";
p9.input="text";
p7.appendChild(p9);
formulario2.appendChild(p7);

let p10 = document.createElement('div');
p10.className = "container";
let p11 = document.createElement('p');
p11.textContent = "Ingrese su fecha de nacimiento "+(i+1);
p10.appendChild(p11);
let p12 = document.createElement('input');
p12.className = "fnac";
p12.input="text";
p10.appendChild(p12);
formulario2.appendChild(p10);

let p13 = document.createElement('div');
p13.className = "container";
let p14 = document.createElement('p');
p14.textContent = "Ingrese su nacionalidad "+(i+1);
p13.appendChild(p14);
let p15 = document.createElement('input');
p15.className = "nacionalidad";
p15.input="text";
p13.appendChild(p15);
formulario2.appendChild(p13);

}
*/
//aqui solamente obtenemos los datos del storage y los mostramos en la pantalla para que el usuario pueda visualizar los mismos
const tar = JSON.parse(localStorage.getItem('tarjeta'));
const formulario = document.getElementById('datosViaje');
let p = document.createElement('p');
p.textContent = "DATOS DE LA COMPRA: ";
formulario.appendChild(p);
let p1 = document.createElement('p');
p1.textContent = "Origen: "+ via.origen;
formulario.appendChild(p1);
let p2 = document.createElement('p');
p2.textContent = "Destino: "+ via.destino;
formulario.appendChild(p2);
let p3 = document.createElement('p');
p3.textContent = "Cantidad de personas: "+ via.cantidad;
formulario.appendChild(p3);
let p4 = document.createElement('p');
p4.textContent = "Fecha de salida: "+ via.fini;
formulario.appendChild(p4);
let p5 = document.createElement('p');
p5.textContent = "Fecha de vuelta: "+ via.ffin;
formulario.appendChild(p5);
let p6 = document.createElement('p');
p6.textContent = "El valor del viaje es de $"+ localStorage.getItem("PrecioViaje");
formulario.appendChild(p6);
let p7 = document.createElement('p');

switch(localStorage.getItem("MetodoPago")){
    case 1:
    p7.textContent = "Abona con débito en un pago por un total de $"+ localStorage.getItem("PrecioViaje");
    formulario.appendChild(p7);
    break;
    case 2:
    p7.textContent = "Abona con crédito en un pago por un total de $"+ localStorage.getItem("PrecioViaje");
    formulario.appendChild(p7);
    break;
    case 3:
    p7.textContent = "Abona con crédito en 3 cuotas de $"+ Math.round(localStorage.getItem("PrecioViaje")/3);
    formulario.appendChild(p7);
    break;
    case 4:
    p7.textContent = "Abona con crédito en 6 cuotas de $"+ Math.round(localStorage.getItem("PrecioViaje")/6);
    formulario.appendChild(p7);
    break;
    default:
    p7.textContent = "Abona con crédito en 12 cuotas de $"+ Math.round(localStorage.getItem("PrecioViaje")/12);
    formulario.appendChild(p7);
    break;
}

let p8 = document.createElement('p');
p8.textContent = "Abona con tarjeta: "+ tar.nTarjeta;
formulario.appendChild(p8);
let p9 = document.createElement('p');
p9.textContent = "Titular de tarjeta "+ tar.NTitular.toUpperCase();
formulario.appendChild(p9);
