class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
// el constructor no se manda a llamar
// sino que se ejecuta al instanciar la clase

let persona1 = new Persona('Jose', 'Mendez');
console.log(persona1);

let persona2 = new Persona ('Rene', 'Descartes');
console.log(persona2);