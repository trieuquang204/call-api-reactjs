let initialState = [
  {
    id: 1,
    name: "name1",
    price: 400,
    status: true,
  },
  {
    id: 2,
    name: "name2",
    price: 300,
    status: false,
  },
  {
    id: 3,
    name: "name3",
    price: 600,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
