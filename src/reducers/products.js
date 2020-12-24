var initialState = [
  {
    id: 1,
    name: 'Iphone',
    price: 400,
    status: true
  },
  {
    id: 2,
    name: 'Iphone2',
    price: 500,
    status: true
  },
  {
    id: 3,
    name: 'Iphone4',
    price: 400,
    status: true
  },
  {
    id: 4,
    name: 'Iphone7',
    price: 400,
    status: false
  },
];

const products = (state = initialState, action) => {
  switch(action.type) {
    default: 
    return [...state];
  }
}

export default products;