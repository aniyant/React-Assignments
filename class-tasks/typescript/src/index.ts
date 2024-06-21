console.log("hellow typescript!");

interface cartitems {
    id: number,
    products: Product[],
    store: string,
}
type Product = {
    id: number,
    p_name: string,
    price: number,
}

let cartItems: cartitems[] = [
    {
      id: 1,
      products: [{ id: 1, p_name: "Jeans", price: 1000 }],
      store: "Amazon",
    },
    {
      id: 1,
      products: [
        { id: 1, p_name: "Jeans", price: 1000 },
        { id: 2, p_name: "Shirt", price: 2000 },
      ],
      store: "Amazon",
    },
  ];
  