const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name; // valor da chave name do obj
  const phoneNumber = order.phoneNumber; // valor da chave phoneNumber do obj
  const adress = Object.values(order.address); // array com valores da chave adress (objeto) do obj
  const deliveryPerson = Object.values(order.order.delivery)[0]; // primeira posição do array com valores da chave delivery (objeto) da chave order (objeto) do obj

  const message = `Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${phoneNumber}, ${adress[0]}, Nº: ${adress[1]}, AP: ${adress[2]}`;

  return console.log(message);
};

customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
// };

// orderModifier(order);
