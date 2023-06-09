//!Objeto literal => objeto declarado, formas definidas => numero:1
const unObjeto = {
  numero: 1,
  palabra: 'hola',
};

//* Ejemplo de Class

class Persona {
  nombre!: string;
  edad!: Date;
  getName() {
    return this.nombre;
  }
  getEdad() {
    const milisegundosEnUnAño = 1000 * 60 * 60 * 24 * 365.25;
    const edad = new Date(this.edad);
    const fechaActual = new Date();
    const diferenciaMiliSegundos = fechaActual.getTime() - edad.getTime();
    return Math.floor(diferenciaMiliSegundos / milisegundosEnUnAño);
  }
}

const principal = () => {
  const matias = new Persona();
  matias.nombre = 'matias';
  matias.edad = new Date(2004, 9, 27);
  console.log(matias.getEdad());
  console.log(matias.getName());
};

principal();
