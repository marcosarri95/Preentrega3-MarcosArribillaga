class cliente{
    constructor(nombre, apellido, DNI, fnac ,nacionalidad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.fnac = fnac;
        this.nacionalidad = nacionalidad;
    }
    
}


const via = JSON.parse(localStorage.getItem('viaje'));

for(i=0;i<=via.cantidad;i++){
    
}