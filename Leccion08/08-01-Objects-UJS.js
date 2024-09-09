let x = 10;
console.log(x.length);

let persona={
    nombre: "Rene",
    apellido: "Sanchez",
    email: "rSanchez@gmail.com",
    edad: 31,
    nombreCompleto: function(){
        return this.nombre + ' '+ this.apellido;
    }
}
persona.telf='12324556';
console.log(persona);

delete persona.telf;
console.log(persona);

// Imprimir Objetos
// Imprime como array
let personaArray = Object.values(persona);
console.log(personaArray);

// Imprime como string
let personaString = JSON.stringify(persona);

// GET y SET

let persona2={
    nombre : 'Tulio',
    apellido: 'Cerbantes',
    email: 'tulioC@gmail.com',
    edad: 30,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
       return this.nombre +' '+ this.apellido;
    }
}
console.log(persona2.nombreCompleto);
console.log(persona2.lang);

persona2.lang = 'en';
console.log(persona2.lang);

//Constructor de objetos
//Función constructor de objetos
function Persona(nombre, apellido, email){
    this.nombre= nombre;
    this.apellido= apellido;
    this.email= email;
    // metodo a metodo constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
};

let padre = new Persona('Jonas', 'Rocha','jrocha@gmail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Laura','Quinteros','lquinteros@gmail.com');

console.log(madre);

padre.nombre = 'Rene';

console.log(padre);
console.log(madre);
// Uso de prototype para agregar funciones al constructor
Persona.prototype.telf = '4568132';

console.log(padre.telf);
console.log(madre.telf);
madre.telf = '654123';
console.log(madre.telf);

// Uso de Call
// para llamar un metodo de un objeto desde otro objeto
// por ejemplo persona3.nombreCompleto.call(persona4);
let persona3={
    nombre : 'Rene',
    apellido: 'Gado',
    nombreCompleto : function(){
        return this.nombre +' '+ this.apellido;
    }
}

let persona4 ={
    nombre: 'Julieta',
    apellido: 'Nieves'
}

console.log(persona3.nombreCompleto.call(persona4));