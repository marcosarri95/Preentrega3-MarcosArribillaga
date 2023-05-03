class cliente{
    constructor(nombre, apellido, DNI, fnac ,nacionalidad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.fnac = fnac;
        this.nacionalidad = nacionalidad;
    }
    
}

class tarjeta{
    constructor(nTarjeta, fVenc, NTitular, codSeg){
        this.nTarjeta = nTarjeta;
        this.fVenc = fVenc;
        this.NTitular = NTitular;
        this.codSeg = codSeg;
    }
}
//<input type="date" id="end" name="trip-end"></input>
function solicitaDatosTarjeta(){
    let error=false;
    const nroTarjeta = document.getElementById("nroTarjeta");
    const vtoTarjeta = document.getElementById("VtoTarjeta");
    const nyap = document.getElementById("NombreYapellido");
    const codS = document.getElementById("codSeg");
    const menu = document.getElementById("destinos");

    if(nroTarjeta.value==""){
        let op = document.getElementById('error1');
        op.textContent = "Debe ingresar un numero de tarjeta válido";
        error = true;
       }
       if(vtoTarjeta.value==""){
        let op = document.getElementById('error2');
        op.textContent = "Debe ingresar una fecha valida";
        error = true;
       }
       if(nyap.value==""){
        let op = document.getElementById('error3');
        op.textContent = "Debe ingresar un nombre correcto";
        error = true;
       }
       if(codSeg.value==""){
        let op = document.getElementById('error4');
        op.textContent = "Debe ingresar un codigo de seguridad correcto";
        error = true;
       }
       if(menu.value=="Seleccionar"){
        let op = document.getElementById('error5');
        op.textContent = "Debe ingresar un metodo de pago correcto";
        error = true;
       }
    
       if(error==false){
        const t = new tarjeta(nroTarjeta.value,vtoTarjeta.value,nyap.value,codS.value);
        
        enJSON = JSON.stringify(t);
        localStorage.setItem("tarjeta", enJSON);
        localStorage.setItem("MetodoPago", menu.value);
        localStorage.setItem("PrecioViaje", Math.round(valorTotal*(1+(interes/100))))
        //document.location.href = "./comprar.html";
     
       }


                                                                
}

const viajeUSD = Math.round((Math.random()*1000 + 700)*100)/100; //genera un valor del viaje en dolares con un valor entre 1000 y 1700, con 2 decimales
const dolarT = localStorage.getItem('dolarTurista');
const via = JSON.parse(localStorage.getItem('viaje'));
const valorViaje = document.getElementById("presentacion");
const valorTotal = Math.round(via.cantidad*dolarT*viajeUSD);
valorViaje.textContent = "El valor del viaje para "+ via.cantidad +" personas es de $"+valorTotal;

let interes = Math.round((Math.random()*10 + 15)*100)/100; //Genera un interes aleaotorio entre 10 y 25, con 2 decimales
console.log(interes);

const menu = document.getElementById("destinos");
let option = document.createElement('option');
option.value = 1;
option.text = "Con tarjeta de débito (1 pago), valor: $" + valorTotal;
menu.appendChild(option);    
option = document.createElement('option');
option.value = 2;
option.text = "Con tarjeta de credito (1 cuota), valor: $" + Math.round(valorTotal*(1+(interes/100)));
menu.appendChild(option);    
option = document.createElement('option');
option.value = 3;
option.text = "Con tarjeta de credito (3 cuotas), valor: $" + Math.round(valorTotal*(1+(interes/100)));
menu.appendChild(option);
option = document.createElement('option');
option.value = 4;
option.text = "Con tarjeta de credito (6 cuotas), valor: $" + Math.round(valorTotal*(1+(interes/100)));
menu.appendChild(option);
option = document.createElement('option');
option.value = 5;
option.text = "Con tarjeta de credito (12 cuotas), valor: $" + Math.round(valorTotal*(1+(interes/100)));
menu.appendChild(option);  


const btn = document.getElementById("btnBuscar");
btn.addEventListener('click', solicitaDatosTarjeta);