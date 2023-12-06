const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// A -

function mostrarImpares(pizzas) {
  const pizzasConIdImpar = pizzas.filter(function (pizza) {
    return pizza.id % 2 !== 0;
  });

  pizzasConIdImpar.forEach(function (pizza) {
    console.log("La pizza con el id impar:", pizza.id, " es la", pizza.nombre);
  });
}

mostrarImpares(pizzas);

// B -

function respuestaPrecio(pizzas) {
  const pizzasMenoresA = pizzas.some(function (pizza) {
    return pizza.precio < 600;
  });

  if (pizzasMenoresA == true) {
    console.log("Hay pizzas que valen menos de $600");
  } else {
    console.log("No hay pizzas que valgan menos de $600");
  }
}

respuestaPrecio(pizzas);

// C -
function respuestaPizza(pizzas) {
  pizzas.forEach((pizzas) => {
    console.log("La ", pizzas.nombre, "tiene un valor de: $", pizzas.precio);
  });
}

respuestaPizza(pizzas);
// D -

function mostrarIngredientes(pizzas) {
  pizzas.forEach(function (pizza) {
    console.log("Los ingredientes de la", pizza.nombre, "son :");

    pizza.ingredientes.forEach(function (ingrediente) {
      console.log(ingrediente);
    });
  });
}

mostrarIngredientes(pizzas);
