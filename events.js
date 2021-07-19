const Events = require('events');
const myEvents = new Events();

myEvents.on('order', (nOrder) => {
  console.log(`Order ${nOrder} created successfully`)
});

myEvents.on('checkout', () => {
  console.log(`Payment has been made`)
});

const createOrder = (nOrder) => {
  myEvents.emit('order', nOrder);
  myEvents.emit('checkout');
  return;
};

module.exports = {
  createOrder
}
