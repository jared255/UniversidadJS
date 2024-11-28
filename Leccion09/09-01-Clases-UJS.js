class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
}
// el constructor no se manda a llamar
// sino que se ejecuta al instanciar la clase

let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
  },
};
console.log(persona1);

let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

// Uso de apply
console.log(persona1.nombreCompleto("Lic.", "5555-1234"));

let arreglo = ["Ing.", "5555-4321"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
