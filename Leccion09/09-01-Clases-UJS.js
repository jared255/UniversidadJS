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
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  //Override
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
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

let empleado1 = new Empleado("Rebeca", "Diaz", "Sistemas");
console.log(empleado1.nombreCompleto());
