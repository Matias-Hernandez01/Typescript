const suma = (a: number, b: number) => {
  return a + b;
};
const resultado = suma(2, 3);
console.log(resultado);

//* Ejemplo de Interface

interface Person {
  name: string;
  age: number;
  email?: string;
}

const printPersonInfo = (person: Person) => {
  console.log(`name: ${person.name}`);
  console.log(`age: ${person.age}`);
  if (person.email) {
    console.log(`email: ${person.email}`);
  }
};

const person: Person = {
  name: 'matias',
  age: 22,
  email: 'matias@hotmail.com',
};
printPersonInfo(person);

//! Ejercicio de interface
interface Book {
  // Completa aquí la definición de la interfaz
  title: string;
  author: string;
  pages: number;
  isbn: string;
}

function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Crea aquí el objeto que cumpla con la interfaz Book
const book: Book = {
  // Completa aquí los valores de las propiedades
  title: 'Cometas en el cielo',
  author: 'Khaled hosseini',
  pages: 200,
  isbn: '978-84-9838-072-9',
};

printBookInfo(book);
