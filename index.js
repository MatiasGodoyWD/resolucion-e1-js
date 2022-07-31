const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
  },
];

//---------------------------------------Ejercicio A--------------------------
//Opción 1
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`La ${pizza.nombre} tiene un id impar`);
  }
});
//Opción 2
const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasImpares.forEach((pizza) =>
  console.log(`La ${pizza.nombre} tiene un id impar`)
);

//---------------------------------------Ejercicio B--------------------------

const precioMenorA600 = (pizza) => pizza.precio < 600;

if (pizzas.some(precioMenorA600)) {
  console.log("Hay pizzas con precio menor a $600");
} else {
  console.log("No hay pizzas con precio menor a $600");
}

//---------------------------------------Ejercicio C--------------------------

pizzas.forEach((pizza) => console.log(`Vení a probar nuestra ${pizza.nombre}`));

//---------------------------------------Ejercicio D--------------------------

pizzas.forEach((pizza) =>
  console.log(`En nuestro local podes conseguir pizzas por $${pizza.precio}`)
);

//---------------------------------------Ejercicio E--------------------------

pizzas.forEach((pizza) =>
  console.log(
    `Vení a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}`
  )
);
