class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}
// el constructor no se manda a llamar
// sino que se ejecuta al instanciar la clase

let persona1 = new Persona('Jose', 'Mendez');
console.log(persona1);

let persona2 = new Persona ('Rene', 'Descartes');
console.log(persona2);

// Métodos get y set en JavaScript
// se agregó get a la clase Persona para acceder a la propiedad nombre

console.log(persona1.nombre);

// se agregó set a la clase Persona para modificar la propiedad nombre
persona1.nombre = 'Jorge';//set nombre('Jorge')
console.log(persona1.nombre);//get nombre